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

export function convertSvg(figmaElement: FrameNode, svgString: string, styles: StyleDict, removeAttrs: boolean): string {
    const svgDoc = new DOMParser().parseFromString(svgString, 'text/svg')
    const root = svgDoc.firstChild;
    if (root === null) return ''

    for (const nd of childNodes2Elements(root.childNodes)) {
        const svgId = nd.attributes.getNamedItem("id")?.value;
        const elementId = figmaElement.name;
        if (svgId !== elementId) throw "Wrong element id";
        parseNode(figmaElement.children as unknown as StyledNode[], childNodes2Elements(nd.childNodes), styles, removeAttrs);
    }
    return new XMLSerializer().serializeToString(svgDoc);
}

function parseNode(figmaElments: readonly StyledNode[], svgElements: Element[], styles: StyleDict, removeAttrs: boolean) {
    //if (figmaElments.length !== svgElements.length) throw "Element node not equal"
    for (let i = 0; i < svgElements.length; i++) {
        const svgNode = svgElements[i];
        const figmaNode = figmaElments[i];

        const stroke = svgNode.getAttribute("stroke");
        if (stroke) {
            if (removeAttrs) {
                svgNode.removeAttribute("stroke")
                svgNode.removeAttribute("stroke-opacity")
            }
            const strokeStyleId = figmaNode.styles.stroke;
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
            const strokeStyleId = figmaNode.styles.fill;
            if (strokeStyleId !== undefined) {
                const styleName = convertStyleName(styles[strokeStyleId].name, '-fill');
                svgNode.setAttribute("class", styleName)
            }
        }
        svgNode.removeAttribute("id")
        const childSvgs = childNodes2Elements(svgNode.childNodes);
        if (childSvgs.length > 0) {
            parseNode(figmaNode.children, childSvgs, styles, removeAttrs);
        }

    }
}

function convertStyleName(str: string, suffix: string): string {
    return "ob-" + str.replace('/ ', '-').toLowerCase() + suffix
}
