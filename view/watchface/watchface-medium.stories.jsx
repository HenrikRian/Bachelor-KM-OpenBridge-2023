import "./watchface-medium";
import React from "react";
import {InnerWatchFaceType} from "../models";


export default {
    title: 'INSTRUMENT/WatchFace/Medium',
    argTypes: {
        innerCircle: {
            control: {
                type: 'inline-radio',
                options: [InnerWatchFaceType.REGULAR, InnerWatchFaceType.PORT_STARBOARD, InnerWatchFaceType.POSITIVE_NEGATIVE]
            }
        },
        rotate: { control: {type: 'range', min: 0, max: 360} },
        primaryTickmarks: {
            control: {
                type: 'inline-radio',
                options: [30, 45, 90]
            }
        },
        secondaryTickmarks: {
            control: {
                type: 'inline-radio',
                options: [5, 9, 10]
            }
        },
        startClipDeg: { control: {type: 'range', min: -360, max: 360} },
        endClipDeg: { control: {type: 'range', min: 0, max: 360} },
    }
};

const Template = (args) => <ob-watchface-medium style={{width: 256}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    innerCircle: InnerWatchFaceType.REGULAR,
    rotate: 0,
    primaryTickmarks: 45,
    secondaryTickmarks: 10,
    cross: false,
    typeOfLabel: true,
    showLabels: true,
    startClipDeg: 0,
    endClipDeg: 0,
};
