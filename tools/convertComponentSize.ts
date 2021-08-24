import * as fs from "fs";

const name = process.argv[2];
let file = fs.readFileSync(name, "utf-8");
file = file
  .replace(/Large/g, "Medium")
  .replace(/large/g, "medium")
  .replace(/24/g, "12")
  .replace(/48/g, "24")
  .replace(/96/g, "48")
  .replace(/128/g, "64")
  .replace(/256/g, "128")
  .replace(/512/g, "256");

const mediumName = name.replace("large", "medium");
fs.writeFileSync(mediumName, file);

file = file
  .replace(/Medium/g, "Small")
  .replace(/medium/g, "small")
  .replace(/48/g, "12")
  .replace(/96/g, "24")
  .replace(/128/g, "32")
  .replace(/256/g, "64")
  .replace(/512/g, "128")
  .replace("showLabels", "showArrow")
  .replace(/\n.*secondaryTickMarks: .+,/, "");

const smallName = name.replace("large", "small");
fs.writeFileSync(smallName, file);
