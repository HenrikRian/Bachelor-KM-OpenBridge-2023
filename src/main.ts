import * as fs from 'fs';
import { convertSvg } from './convert-svg';
import { getFigmaFile, getFigmaSvg } from './figmaImport';
import { FrameNode } from './figma-types';

const exportComponents: { path: string[], name: string }[] = [
  { name: 'HdgCenterLarge', path: ['HDG', 'HDG component', 'Large', 'Ellipse 8'] },
  { name: 'HdgArrowLarge', path: ['HDG', 'Elements', 'Arrow/ Large'] },
  { name: 'HdgArrowMedium', path: ['HDG', 'Elements', 'Arrow/ Medium'] },
  { name: 'HdgArrowSmall', path: ['HDG', 'Elements', 'Arrow/ Small'] },
  { name: 'HdgWatchFaceLarge', path: ['HDG', 'Elements', 'Watch face/ Large'] },
  { name: 'HdgWatchFaceMedium', path: ['HDG', 'Elements', 'Watch face/ Medium'] },
  { name: 'HdgWatchFaceSmall', path: ['HDG', 'Elements', 'Watch face/ Small'] }
]

interface FigmaNode {
  name: string
  children: FigmaNode[]
  id: string
}

function getElement(root: FigmaNode, path: string[]): FigmaNode | null {
  const name = path.shift();
  if (name === undefined) {
    return root;
  }
  const ele = root.children.find(value => value.name === name)
  if (ele === undefined) return null
  return getElement(ele, path)
}

async function main() {
  const mainFigmaFile = 'UNbup2BF6eR8omPSRzFSlV'
  const documentStyles = await getFigmaFile('XXHKjGJXg0acrBak97mFhP');
  const document = await getFigmaFile(mainFigmaFile);
  const genFolder = 'gen'
  if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder)
  }
  // @ts-ignore
  const styles = { ...document.styles, ...documentStyles.styles }

  for (const component of exportComponents) {

    console.log(`Exporting ${ component.name }`)
    // @ts-ignore
    const element = getElement(document.document as FigmaNode, component.path);
    if (element === null) {
      console.error(`Could not find ${ component.name }`)
      continue
    }
    const svg = await getFigmaSvg(mainFigmaFile, element.id);
    const out = convertSvg(element as unknown as FrameNode, svg, styles, false);
    fs.writeFileSync(`${ genFolder }/${ component.name }.svg`, out)
  }
}

main()
