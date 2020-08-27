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

function getSvgId(svgNode: Element): string {
    return (svgNode.getAttribute("id") as string).replace('Â°','°');
}

export function convertSvg(figmaElement: FrameNode, svgString: string, styles: StyleDict, removeAttrs: boolean): string {
    const svgDoc = new DOMParser().parseFromString(svgString, 'text/svg')
    const root = svgDoc.firstChild;
    if (root === null) return ''

    for (const nd of childNodes2Elements(root.childNodes)) {
        const svgId = getSvgId(nd)
        const elementId = figmaElement.name;
        if (svgId !== elementId) {
            console.warn(`Figma element id and svg id does not match (${elementId} !== ${svgId})`)
        }
        parseNode(figmaElement.children as unknown as StyledNode[], childNodes2Elements(nd.childNodes), styles, removeAttrs);
    }
    return new XMLSerializer().serializeToString(svgDoc);
}

function parseNode(figmaElments: readonly StyledNode[], svgElements: Element[], styles: StyleDict, removeAttrs: boolean) {
    for (let i = 0; i < svgElements.length; i++) {
        const svgNode = svgElements[i];
        let svgId = getSvgId(svgNode)
        let figmaNode = figmaElments.find(f => f.name == svgId);

        if (figmaNode === undefined) {
            const re = new RegExp('_[0-9]+$');
            if (svgId.match(re)) {
                svgId = svgId.replace(re, '')
                figmaNode = figmaElments.find(f => f.name == svgId);
            }
        }

        if (figmaNode === undefined) {
            console.warn(`Missing figma node: ${svgId}`)
            return
        }

        const cssClasses = []
        if (figmaNode.styles && figmaNode.styles.stroke !== undefined) {
            if (removeAttrs) {
                svgNode.removeAttribute("stroke")
                svgNode.removeAttribute("stroke-opacity")
            }
            const strokeStyleId = figmaNode.styles.stroke;
            if (strokeStyleId !== undefined) {
                const styleName = convertStyleName(styles[strokeStyleId].name, '-stroke');
                cssClasses.push(styleName)
            }
        }

        if (figmaNode.styles && figmaNode.styles.fill) {
            if (removeAttrs) {
                svgNode.removeAttribute("fill")
            }
            const strokeStyleId = figmaNode.styles.fill;
            if (strokeStyleId !== undefined) {
                const styleName = convertStyleName(styles[strokeStyleId].name, '-fill');
                cssClasses.push(styleName)
            }
        }
        if (cssClasses.length > 0) {
            svgNode.setAttribute("class", cssClasses.join(" "))
        }
        const childSvgs = childNodes2Elements(svgNode.childNodes);
        if (childSvgs.length > 0) {
            if (figmaNode.children && figmaNode.children.length > 0) {
                parseNode(figmaNode.children, childSvgs, styles, removeAttrs);
            } else {
                console.warn(`Missing figma node on ${svgId}. Skipping subnodes`)
            }
        }

    }
}

function convertStyleName(str: string, suffix: string): string {
    return "ob-" + str.replace('/ ', '-').toLowerCase() + suffix
}
