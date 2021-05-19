import "./speedometer-large";
import React from "react";


export default {
    title: 'INSTRUMENT/SOG & STW/01 Speedometer/Large',
    argTypes: {
        value: {control: {type: 'range', min: -5, max: 25}}
    },
};

const Template = (args) => <ob-speedometer-large style={{width: 512, height: 512}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    value: 10,
};
