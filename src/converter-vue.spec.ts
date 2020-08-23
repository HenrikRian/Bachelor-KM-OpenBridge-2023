import {ComponentDefinition, convert2vue} from "./converter-vue";
import fs from "fs";

const components: ComponentDefinition[] =
    [{
        name: 'HdgLarge',
        components: [
            {file: 'HdgWatchFaceLarge', controlRotatePropName: null},
            {file: 'ArrowLarge', controlRotatePropName: "heading"},
        ]
    }, {
        name: 'HdgMedium',
        components: [
            {file: 'HdgWatchFaceMedium', controlRotatePropName: null},
            {file: 'ArrowMedium', controlRotatePropName: "heading"},
        ]
    },
        {
            name: 'HdgSmall',
            components: [
                {file: 'HdgWatchFaceSmall', controlRotatePropName: null},
                {file: 'ArrowSmall', controlRotatePropName: "heading"},
            ]
        }
    ]

const genFolder = 'gen-vue'
if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder)
}
components.forEach(def => convert2vue(def));

