import "./thruster-element-large";
import React from "react";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/Thruster Element/Large',
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args) => <ob-thruster-element-large style={{width: 512, height: 80}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
  showArrow: true
};