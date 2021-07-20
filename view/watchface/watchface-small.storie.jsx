import "./watchface-small";
import "./primary-tickmarks/primary-tickmarks-small"
import React from "react";
import {InnerWatchFaceType} from "../models";


export default {
    title: 'INSTRUMENT/WatchFace/Small',
    argTypes: {
        innerCircle: {
            control: {
                type: 'inline-radio',
                options: [InnerWatchFaceType.REGULAR, InnerWatchFaceType.PORT_STARBOARD, InnerWatchFaceType.POSITIVE_NEGATIVE]
            }
        },
        rotate: {control: {type: 'range', min: 0, max: 360}},
        primaryTickmarks: {
            control: {
                type: 'inline-radio',
                options: [30, 45, 90]
            }
        },
        startClipDeg: {control: {type: 'range', min: -360, max: 360}},
        endClipDeg: {control: {type: 'range', min: 0, max: 360}},
    }
};

const Template = (args) => <ob-watchface-small style={{width: 128}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    innerCircle: InnerWatchFaceType.REGULAR,
    rotate: 0,
    primaryTickmarks: 45,
    cross: false,
    showArrow: true,
    startClipDeg: 0,
    endClipDeg: 0,
};
