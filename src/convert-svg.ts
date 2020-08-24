import {FrameNode, StyleDict, StyledNode} from "./figma-types";
import {DOMParser, XMLSerializer} from "xmldom";

function childNodes2Elements(nodes: NodeListOf<ChildNode>): Element[] {
    const data = [];
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.nodeName === "#text") continue;
        if (node.nodeName === "defs") continue;
        data.push(node as Element)
    }
    return data;
}

function replaceAll(string: string, search: string, replace: string): string {
  return string.split(search).join(replace);
}

export function convertSvg(figmaElement: FrameNode, svgString: string, styles: StyleDict, removeAttrs: boolean, clipPrefix: string): string {
    const svgDoc = new DOMParser().parseFromString(svgString, 'text/svg')
    const root = svgDoc.firstChild;
    if (root === null) return ''

    for (const nd of childNodes2Elements(root.childNodes)) {
        const svgId = nd.attributes.getNamedItem("id")?.value;
        const elementId = figmaElement.name;
        if (svgId !== elementId) throw "Wrong element id";
        parseNode(figmaElement as unknown as StyledNode, nd, styles, removeAttrs);
    }
    let out = new XMLSerializer().serializeToString(svgDoc);
    out = replaceAll(out, "url(#clip", `url(#${clipPrefix}clip`)
    out = replaceAll(out, "clipPath id=\"clip", `clipPath id="${clipPrefix}clip`)
    return out;
}

function parseNode(figmaElment: StyledNode, svgNode: Element, styles: StyleDict, removeAttrs: boolean) {


        const stroke = svgNode.getAttribute("stroke");
        if (stroke) {
            if (removeAttrs) {
                svgNode.removeAttribute("stroke")
                svgNode.removeAttribute("stroke-opacity")
            }
            const strokeStyleId = figmaElment.styles.stroke;
            if (strokeStyleId !== undefined) {
                const styleName = convertStyleName(styles[strokeStyleId].name, '-stroke');
                svgNode.setAttribute("class", styleName)
            }
        }

        const fill = svgNode.getAttribute("fill");
        if (fill) {
            if (removeAttrs) {
                svgNode.removeAttribute("fill")
            }
            const strokeStyleId = figmaElment.styles.fill;
            if (strokeStyleId !== undefined) {
                const styleName = convertStyleName(styles[strokeStyleId].name, '-fill');
                svgNode.setAttribute("class", styleName)
            }
        }
        svgNode.removeAttribute("id")
        const childSvgs = childNodes2Elements(svgNode.childNodes);
        if (childSvgs.length > 0) {
            for (let i = 0; i < childSvgs.length; i++) {
                const svgNode = childSvgs[i];
                const figmaNode = figmaElment.children[i];
                parseNode(figmaNode, svgNode, styles, removeAttrs);
            }
        }


}

function convertStyleName(str: string, suffix: string): string {
    return "ob-" + str.replace('/ ', '-').toLowerCase() + suffix
}
