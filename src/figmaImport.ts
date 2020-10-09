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
  elementIds: string
): Promise<{ [id: string]: string }> {
  const imageUrlData = await fetch(
    `${baseUrl}/v1/images/${fileId}?ids=${elementIds}&format=svg&svg_include_id=true`,
    header
  );
  if (imageUrlData.status !== 200) {
    const responseText = await imageUrlData.text();
    throw Error(`Something failed when downloading SVG: ${responseText}`)
  }
  const imageUrls = await imageUrlData.json();
  return imageUrls.images
}
