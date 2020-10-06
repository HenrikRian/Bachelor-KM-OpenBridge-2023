import "./watchface-large";
import React from "react";


export default {
    title: 'INSTRUMENT/WatchFace',
    argTypes: {
        innerCircle: {
            control: {
                type: 'inline-radio',
                options: ['regular', 'portStarboard', 'positiveNegative']
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

const Template = (args) => <ob-watchface-large style={{width: 512}} {...args}/>;

export const Large = Template.bind({});
Large.args = {
    innerCircle: 'regular',
    rotate: 0,
    primaryTickmarks: 45,
    secondaryTickmarks: 10,
    cross: false,
    showLabels: true,
    startClipDeg: 0,
    endClipDeg: 0,
};
