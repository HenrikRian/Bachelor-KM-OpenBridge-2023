import "./thruster-element-medium";
import React from "react";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/Thruster Element',
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args) => <ob-thruster-element-medium style={{width: 256, height: 256}} {...args}/>

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40,
  showArrow: true
};
