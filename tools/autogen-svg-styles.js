const fs = require("fs");

const pallet = fs.readFileSync('../scss/variables-bright.scss', 'utf-8').split('\r\n');
const re = new RegExp('--(.*?-color)');
const colorNames = pallet.map(s => s.match(re)).filter(m => m !== null).map(v => v[1]);
const cssStrings = colorNames.map(s => `.ob-${s}-stroke { stroke: var(--${s});}\n.ob-${s}-fill { fill: var(--${s});}\n`)
fs.writeFileSync('../scss/_svg-variables.scss', cssStrings.join('\n'))