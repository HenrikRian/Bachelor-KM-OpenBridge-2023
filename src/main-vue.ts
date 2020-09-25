import {ComponentDefinition, convert2vue} from "./converter-vue";
import fs from "fs";

const components: ComponentDefinition[] =
    [{
        name: 'HdgLarge',
        components: [
            {file: 'generated-with-style/HdgCircular/WatchFaceLarge'},
            {file: 'generated-with-style/HdgCircular/HeadingLarge', controlRotatePropName: 'heading'},
            {file: 'generated-with-style/HdgCircular/CogLarge', controlRotatePropName: "cog"},
        ]
    }, {
        name: 'HdgMedium',
        components: [
            {file: 'generated-with-style/HdgCircular/WatchFaceMedium'},
            {file: 'generated-with-style/HdgCircular/HeadingMedium', controlRotatePropName: "heading"},
        ]
    }, {
            name: 'HdgSmall',
            components: [
                {file: 'generated-with-style/HdgCircular/WatchFaceSmall'},
                {file: 'generated-with-style/HdgCircular/HeadingSmall', controlRotatePropName: "heading"},
            ]
        }
    ]

const genFolder = 'gen-vue'
if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder)
}
components.forEach(def => convert2vue(def));

