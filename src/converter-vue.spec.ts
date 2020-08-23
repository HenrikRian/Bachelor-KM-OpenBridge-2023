import {ComponentDefinition, convert2vue} from "./converter-vue";
import fs from "fs";

const components: ComponentDefinition[] =
    [{
        name: 'HdgLarge',
        components: [
            {file: 'WatchfaceLarge', controlRotatePropName: null},
            {file: 'ArrowLarge', controlRotatePropName: "heading"},
        ]
    }, {
        name: 'HdgMedium',
        components: [
            {file: 'WatchfaceMedium', controlRotatePropName: null},
            {file: 'ArrowMedium', controlRotatePropName: "heading"},
        ]
    },
        {
            name: 'HdgSmall',
            components: [
                {file: 'WatchfaceSmall', controlRotatePropName: null},
                {file: 'ArrowSmall', controlRotatePropName: "heading"},
            ]
        }]

const genFolder = 'gen-vue'
if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder)
}
components.forEach(def => convert2vue(def));

