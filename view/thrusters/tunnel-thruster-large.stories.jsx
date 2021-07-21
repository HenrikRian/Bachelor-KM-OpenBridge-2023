import "./tunnel-thruster-large";
import React from "react";


export default {
    title: 'INSTRUMENT/Thruster & Propulsion/02 Tunnel Thruster/Large',
    argTypes: {
        target: {control: {type: 'range', min: -100, max: 100}},
        value: {control: {type: 'range', min: -100, max: 100}},
        suggestedSetpoint: {control: {type: 'range', min: -100, max: 100}},
        showSetPoint: {control: 'boolean'},
        showTickmarks: {control: 'boolean'},
        showSuggestedSetPoint: {control: 'boolean'},
    },
};

const Template = (args) => <ob-tunnel-thruster-large style={{width: 512, height: 512}} {...args}/>

export const Default = Template.bind({});
Default.args = {
    target: 60,
    value: 40,
    suggestedSetpoint: 10,
    showTickmarks: true,
    showSetPoint: true,
    showSuggestedSetPoint: true
};
