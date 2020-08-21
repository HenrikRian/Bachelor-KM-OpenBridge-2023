import {figmaToken} from "./secret";
import fetch from 'node-fetch';

const baseUrl = 'https://api.figma.com'
const header = {'X-Figma-Token': figmaToken}

export async function getFigmaFile(fileId: string): Promise<unknown> {
    const res = await fetch(`${baseUrl}/v1/files/${fileId}`, {headers: header});
    return await res.json();
}
