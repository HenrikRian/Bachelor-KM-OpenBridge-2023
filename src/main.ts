import * as fs from 'fs';
import {convertSvg} from "./convert-svg";
import {getFigmaFile, getFigmaSvg} from "./figmaImport";

function replaceAll(string: string, search: string, replace: string): string {
    return string.split(search).join(replace);
}

function makeFilename(name: string): string {
    let out = replaceAll(name, '/','');
    out = replaceAll(out, ' ','');
    out = replaceAll(out, '#','');
    return out;
}

async function main() {
    const mainFigmaFile = 'edkOpbWBkssAha1LO6I4Mp'
    const documentStyles = await getFigmaFile('XXHKjGJXg0acrBak97mFhP');
    const document = await getFigmaFile(mainFigmaFile);
    // @ts-ignore
    const styles = {...document.styles, ...documentStyles.styles}
    // @ts-ignore
    const pages = document.document.children;
    for (const page of pages) {
        for (const frame of page.children) {
            for (const element of frame.children) {
                if (element.name.charAt(0) === '#' && element.visible !== false) {
                    console.log(`Exporting ${element.name}`)
                    const svg = await getFigmaSvg(mainFigmaFile, element.id);
                    const out = convertSvg(element, svg, styles, false);
                    const filename = makeFilename(element.name as string)
                    fs.writeFileSync(`gen/${filename}.svg`, out)
                }


            }
        }

    }
}

main()
