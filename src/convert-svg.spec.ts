import * as fs from 'fs';
import {convertSvg} from "./convert-svg";
import {getFigmaFile} from "./figmaImport";

/*
    const palette = getFigmaFile('XXHKjGJXg0acrBak97mFhP')
    palette.then(v => {
        fs.writeFileSync("testfiles/pallett.json", JSON.stringify(v))
    })
*/

const document = JSON.parse(fs.readFileSync("testfiles/testfiles_hdg.json", "utf-8"));
const documentStyles = JSON.parse(fs.readFileSync("testfiles/pallett.json", "utf-8"));
const hdgElement = document.document.children[21].children[1].children[11]
const svg = fs.readFileSync("testfiles/testfiles_hdg.svg", "utf-8");
const styles = {...document.styles, ...documentStyles.styles}
const out = convertSvg(hdgElement, svg, styles, true);
fs.writeFileSync("testfiles/out.svg", out)


