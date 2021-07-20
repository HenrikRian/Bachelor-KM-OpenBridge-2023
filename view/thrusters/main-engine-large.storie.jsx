import "./main-engine-large";
import React from "react";


export default {
    title: 'INSTRUMENT/Thruster & Propulsion/03 Main Engine/Large',
    argTypes: {
        target: {control: {type: 'range', min: -100, max: 100}},
        value: {control: {type: 'range', min: -100, max: 100}}
    },
};

const Template = (args) => <ob-main-engine-large style={{width: 80, height: 512}} {...args}/>

export const Default = Template.bind({});
Default.args = {
    target: 60,
    value: 40,
    showSetPoint: true
};
