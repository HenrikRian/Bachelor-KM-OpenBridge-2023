import "./azimuth-small";
import React from "react";


export default {
    title: 'INSTRUMENT/Thruster & Propulsion/01 Azimuth thruster/Small',
    argTypes: {
        value: {control: {type: 'range', min: -100, max: 100}},
        angle: {control: {type: 'range', min: 0, max: 360}},
    },
};

const Template = (args) => <ob-azimuth-small style={{width: 64, height: 64}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    value: 40,
    angle: 45,
    showPortStarboard: false
};
