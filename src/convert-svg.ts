import { FrameNode, StyleDict, StyledNode } from './figma-types';
import { DOMParser, XMLSerializer } from 'xmldom';

function childNodes2Elements(nodes: NodeListOf<ChildNode>): Element[] {
  const data = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.nodeName === '#text') continue;
    if (node.nodeName === 'defs') continue;
    data.push(node as Element)
  }
  return data;
}

function getSvgId(svgNode: Element): string {
  return (svgNode.getAttribute('id') as string).replace('Â°', '°');
}

function replaceAll(string: string, search: string, replace: string): string {
  return string.split(search).join(replace);
}

export function convertSvg(figmaElement: FrameNode, svgString: string, styles: StyleDict, removeAttrs: boolean, clipPrefix: string): string {
  const svgDoc = new DOMParser().parseFromString(svgString, 'text/svg')
  const root = svgDoc.firstChild;
  if (root === null) return ''

  for (const nd of childNodes2Elements(root.childNodes)) {
    const svgId = getSvgId(nd)
    const elementId = figmaElement.name;
    if (svgId !== elementId) {
      console.warn(`Figma element id and svg id does not match (${ elementId } !== ${ svgId })`)
    }
    parseNode(figmaElement as unknown as StyledNode, nd, styles, removeAttrs);
  }
  let out = new XMLSerializer().serializeToString(svgDoc);
  out = replaceAll(out, 'url(#clip', `url(#${ clipPrefix }clip`)
  out = replaceAll(out, 'clipPath id="clip', `clipPath id="${ clipPrefix }clip`)
  return out;
}

function findFigmaNode(figmaElements: readonly StyledNode[], svgNode: Element): StyledNode | undefined {
  let svgId = getSvgId(svgNode)
  let figmaNode = figmaElements.find(f => f.name == svgId);

  if (figmaNode === undefined) {
    const re = new RegExp('_[0-9]+$');
    if (svgId.match(re)) {
      svgId = svgId.replace(re, '')
      figmaNode = figmaElements.find(f => f.name == svgId);
    }
  }
  return figmaNode
}

function parseNode(figmaNode: StyledNode, svgNode: Element, styles: StyleDict, removeAttrs: boolean) {


  const cssClasses = []
  if (figmaNode.styles && figmaNode.styles.stroke !== undefined) {
    if (removeAttrs) {
      svgNode.removeAttribute('stroke')
      svgNode.removeAttribute('stroke-opacity')
    }
    const strokeStyleId = figmaNode.styles.stroke;
    if (strokeStyleId !== undefined) {
      const styleName = convertStyleName(styles[strokeStyleId].name, '-stroke');
      cssClasses.push(styleName)
    }
  }

  if (figmaNode.styles && figmaNode.styles.fill) {
    if (removeAttrs) {
      svgNode.removeAttribute('fill')
    }
    const strokeStyleId = figmaNode.styles.fill;
    if (strokeStyleId !== undefined) {
      const styleName = convertStyleName(styles[strokeStyleId].name, '-fill');
      cssClasses.push(styleName)
    }
  }
  if (cssClasses.length > 0) {
    svgNode.setAttribute('class', cssClasses.join(' '))
  }
  const childSvgs = childNodes2Elements(svgNode.childNodes);
  if (childSvgs.length > 0) {
    if (figmaNode.children === undefined || figmaNode.children.length == 0) {
      console.warn(`Missing figma node on ${ svgNode.getAttribute('id') }.`)
      return
    }

    for (let i = 0; i < childSvgs.length; i++) {
      for (let i = 0; i < childSvgs.length; i++) {
        const svgNode = childSvgs[i];
        const figmaSubNode = findFigmaNode(figmaNode.children, svgNode);
        if (figmaSubNode === undefined) {
          console.warn(`Missing figma node: ${ svgNode.getAttribute('id') }. Skipping subnodes.`)
        } else {
          parseNode(figmaSubNode, svgNode, styles, removeAttrs);
        }
      }
    }

  }

}

function convertStyleName(str: string, suffix: string): string {
  return 'ob-' + str.replace('/ ', '-').toLowerCase() + suffix
}
