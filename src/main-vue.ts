import {ComponentDefinition, convert2vue} from "./converter-vue";
import fs from "fs";

const components: ComponentDefinition[] =
    [{
        name: 'HdgLarge',
        components: [
            {file: 'generated-with-style/HDG_COG/WatchFaceLarge'},
            {file: 'generated-with-style/HDG_COG/HeadingLarge', controlRotatePropName: 'heading'},
            {file: 'generated-with-style/HDG_COG/CogLarge', controlRotatePropName: "cog"},
        ]
    }, {
        name: 'HdgMedium',
        components: [
            {file: 'generated-with-style/HDG_COG/WatchFaceMedium'},
            {file: 'generated-with-style/HDG_COG/HeadingMedium', controlRotatePropName: "heading"},
        ]
    }, {
        name: 'HdgSmall',
        components: [
            {file: 'generated-with-style/HDG_COG/WatchFaceSmall'},
            {file: 'generated-with-style/HDG_COG/HeadingSmall', controlRotatePropName: "heading"},
        ]
    }, {
        name: 'SpeedometerMediumRaw',
        components: [
            {file: 'generated-with-style/SOG_STW/WatchFaceMedium'},
            {file: 'generated-with-style/SOG_STW/SpeedNeedleMedium', controlRotatePropName: "angle"},
        ]
    }
    ]

const genFolder = 'gen-vue'
if (!fs.existsSync(genFolder)) {
    fs.mkdirSync(genFolder)
}
components.forEach(def => convert2vue(def));

