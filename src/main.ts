import * as fs from 'fs';
import { convertSvg } from './convert-svg';
import { getFigmaFile, getFigmaSvg } from './figmaImport';
import { FrameNode } from './figma-types';
import yargs from 'yargs';
import fetch from 'node-fetch';

import { exportComponents, ExportDef } from './exports';
import * as dotenv from 'dotenv';

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
  const mainFigmaFile = 'UNbup2BF6eR8omPSRzFSlV';

  const documentStyles: any = await getFigmaFile('XXHKjGJXg0acrBak97mFhP');
  const document: any = await getFigmaFile(mainFigmaFile);
  const genFolder = option.outFolder;

  if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder);
  }

  const styles = {
    ...document.styles,
    ...documentStyles.styles
  };
  const elements = exportComponents.map(component => {
    const element = getElement(document.document as FigmaNode, component.path);
    return {component: component, element: element}
  }).filter(value => value.element !== null) as {component: ExportDef, element: FigmaNode}[];

  const figmaIds = elements.map(v => v.element.id);
  const urlSvgs = await getFigmaSvg(mainFigmaFile, figmaIds.join(','))
  const promises = [];
  for (const ele of elements) {
    // eslint-disable-next-line no-async-promise-executor
    promises.push(new Promise( async (resolve, reject) => {
      const element = ele.element;
    const component = ele.component;
    console.log(`Exporting ${ component.name }`);

    if (element === null) {
      console.error(`Could not find ${ component.name }`);
      reject();
      return;
    }
    let imageData
    try {
      imageData = await fetch(urlSvgs[element.id])
    } catch (e) {
      console.error(`Could not download SVG for ${ component.name }`,e);
      reject(e);
      return;
    }
    const svg = await imageData.text()
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
    }))
  }
  Promise.all(promises).then(()=>console.log("Done"))
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
