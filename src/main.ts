import * as fs from 'fs';
import { convertSvg } from './convert-svg';
import { getFigmaFile, getFigmaSvg } from './figmaImport';
import { FrameNode } from './figma-types';
import yargs from 'yargs';

import { exportComponents } from './exports';
import dotenv from 'dotenv';

dotenv.config();

interface FigmaNode {
  name: string;
  children: FigmaNode[];
  id: string;
}

function getElement(root: FigmaNode, path: string[]): FigmaNode | null {
  const name = path.shift();
  if (name === undefined) {
    return root;
  }
  const ele = root.children.find((value) => value.name === name);
  if (ele === undefined) {
    console.error(`Did not find ${ name }, available names are:`, root.children.map(v => v.name))
    return null;
  }
  return getElement(ele, path);
}

async function main(option: { outFolder: string, removeAttributes: boolean }) {
  const mainFigmaFile = process.env.FIGMA_MAINFILE; // 'UNbup2BF6eR8omPSRzFSlV';

  const documentStyles: any = await getFigmaFile(process.env.FIGMA_DOCSTYLE); // 'XXHKjGJXg0acrBak97mFhP'
  const document: any = await getFigmaFile(mainFigmaFile);
  const genFolder = option.outFolder;

  if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder);
  }

  const styles = {
    ...document.styles,
    ...documentStyles.styles
  };

  for (const component of exportComponents) {
    console.log(`Exporting ${ component.name }`);

    const element = getElement(document.document as FigmaNode, component.path);
    if (element === null) {
      console.error(`Could not find ${ component.name }`);
      continue;
    }
    const svg = await getFigmaSvg(mainFigmaFile, element.id, 3);
    const out = convertSvg(
      (element as unknown) as FrameNode,
      svg,
      styles,
      option.removeAttributes,
      element.name
    );

    const outputFolder = component.outputFolder
      ? `${ genFolder }/${ component.outputFolder }`
      : genFolder;

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }
    fs.writeFileSync(`${ outputFolder }/${ component.name }.svg`, out);
  }
}

const argv = yargs
  .option('clean', {
    alias: '-c',
    description: 'Remove hard coded styles.',
    type: 'boolean'
  })
  .help()
  .alias('help', 'h')
  .argv;

let option;

if (argv.clean) {
  option = { outFolder: 'generated-without-style', removeAttributes: true }
} else {
  option = { outFolder: 'generated-with-style', removeAttributes: false }
}
main(option)
  .then(() => console.log('Completed autogenerate'))
  .catch(e => console.error('Failed autogenerate \nError:\n', e))
