import "./combined-medium";
import React from "react";

export default {
    title: 'INSTRUMENT/PITCH & ROLL/03 Combined/Medium',
    argTypes: {
        pitch: {control: {type: 'range', min: -6, max: 6, step: 0.1}},
        lowerPitch: {control: {type: 'range', min: -6, max: 6, step: 0.1}},
        upperPitch: {control: {type: 'range', min: -6, max: 6, step: 0.1}},
        roll: {control: {type: 'range', min: -6, max: 6, step: 0.1}},
        lowerRoll: {control: {type: 'range', min: -6, max: 6, step: 0.1}},
        upperRoll: {control: {type: 'range', min: -6, max: 6, step: 0.1}},
        scale: {control: {type: 'range', min: 1, max: 10, step: 1}},
    },
};

const Template = (args) => <ob-pitch-roll-medium style={{height: 256, width: 256}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    pitch: 2,
    lowerPitch: -2,
    upperPitch: 3,
    roll: 2,
    lowerRoll: -2,
    upperRoll: 3,
    scale: 5,
};
