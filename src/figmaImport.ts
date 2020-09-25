import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = 'https://api.figma.com';
const figmaToken = process.env.FIGMA_TOKEN;
if (figmaToken === undefined) throw 'Missing figma token in environment';
const header = { headers: { 'X-Figma-Token': figmaToken } };

export async function getFigmaFile(fileId: string): Promise<unknown> {
  const res = await fetch(`${baseUrl}/v1/files/${fileId}`, header);
  if (res.status !== 200) {
    const responseText = await res.text();
    throw Error(`Something failed when downloading Figma file: ${responseText}`)
  }
  return await res.json();
}

export async function getFigmaSvg(
  fileId: string,
  elementId: string,
  retry: number
): Promise<string> {
  if (retry < 0) {
    throw Error(`Something failed when downloading SVG.`)
  }
  const imageUrlData = await fetch(
    `${baseUrl}/v1/images/${fileId}?ids=${elementId}&format=svg&svg_include_id=true`,
    header
  );
  if (imageUrlData.status !== 200) {
    const responseText = await imageUrlData.text();
    throw Error(`Something failed when downloading SVG: ${responseText}`)
  }
  const imageUrls = await imageUrlData.json();
  const imageData = await fetch(imageUrls.images[elementId])
    if (imageData.status !== 200) {
    const responseText = await imageUrlData.text();
    throw Error(`Something failed when downloading SVG: ${responseText}`)
  }
  const svg = await imageData.text()
  if (svg.length === 0)
    return getFigmaSvg(fileId, elementId, retry - 1)
  return svg;
}
