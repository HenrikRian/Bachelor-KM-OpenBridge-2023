import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = 'https://api.figma.com';
const figmaToken = process.env.FIGMA_TOKEN;
if (figmaToken === undefined) throw 'Missing figma token in environment';
const header = { headers: { 'X-Figma-Token': figmaToken } };

export async function getFigmaFile(fileId: string): Promise<unknown> {
  const res = await fetch(`${baseUrl}/v1/files/${fileId}`, header);
  return await res.json();
}

export async function getFigmaSvg(
  fileId: string,
  elementId: string
): Promise<string> {
  const imageUrlData = await fetch(
    `${baseUrl}/v1/images/${fileId}?ids=${elementId}&format=svg&svg_include_id=true`,
    header
  );
  const imageUrls = await imageUrlData.json();
  return fetch(imageUrls.images[elementId]).then((r) => r.text());
}
