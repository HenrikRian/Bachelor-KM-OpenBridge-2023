import {ComponentDefinition, convert2vue} from "./converter-vue";
import fs from "fs";

const components: ComponentDefinition[] =
    [{
        name: 'HdgLarge',
        components: [
            {file: 'HdgWatchFaceLarge', controlRotatePropName: null},
            {file: 'HdgCenterLarge', controlRotatePropName: null},
            {file: 'HdgArrowLarge', controlRotatePropName: "heading"},
        ]
    }, {
        name: 'HdgMedium',
        components: [
            {file: 'HdgWatchFaceMedium', controlRotatePropName: null},
            {file: 'HdgArrowMedium', controlRotatePropName: "heading"},
        ]
    },
        {
            name: 'HdgSmall',
            components: [
                {file: 'HdgWatchFaceSmall', controlRotatePropName: null},
                {file: 'HdgArrowSmall', controlRotatePropName: "heading"},
            ]
        }
    ]

const genFolder = 'gen-vue'
if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder)
}
components.forEach(def => convert2vue(def));

