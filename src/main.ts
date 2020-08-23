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

const exportComponents: {[id: string]: { [id: string]: string[] }} = {
    HDG: {
        Elements: ['#Arrow/ Large', '#Arrow/ Medium', '#Arrow/ Small', '#Watch face/ Large', '#Watch face/ Medium', '#Watch face/ Small']
    },
    Rudder: {
        Elements: ['Rudder/ Large', 'Rudder/ Medium', 'Rudder/ Small', 'Watch face/ Large', 'Watch face/ Medium', 'Watch face/ Small']
    }
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
        if (!(page.name in exportComponents)) continue;
        const getFrames = exportComponents[page.name];
        for (const frame of page.children) {
            if (!(frame.name in getFrames)) continue;

            const getComponents = getFrames[frame.name];
            for (const element of frame.children) {
                if (getComponents.includes(element.name)) {
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
