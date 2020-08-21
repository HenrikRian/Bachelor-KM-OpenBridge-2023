import * as fs from 'fs';
import {convertSvg} from "./convert-svg";
import {getFigmaFile, getFigmaSvg} from "./figmaImport";

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
                    const filename = (element.name as string).replace('/','-').replace('#','')
                    fs.writeFileSync(`gen/${filename}.svg`, out)
                }


            }
        }

    }
}

main()
