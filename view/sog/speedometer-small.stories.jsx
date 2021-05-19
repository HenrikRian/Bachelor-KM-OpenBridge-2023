import "./speedometer-small";
import React from "react";

export default {
    title: 'INSTRUMENT/SOG & STW/01 Speedometer/Small',
    argTypes: {
        value: {control: {type: 'range', min: -5, max: 25}}
    },
};

const Template = (args) => <ob-speedometer-small style={{width: 128, height: 128}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    value: 5
};
