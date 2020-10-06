import React from "react";
import "./main-engine-medium";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/03 Main Engine',
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args) => <ob-main-engine-medium style={{width: 40, height: 256}}  {...args}/>

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40
};
