import "./tunnel-thruster-medium";
import React from "react";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/02 Tunnel Thruster',
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args) => <ob-tunnel-thruster-medium style={{width: 256, height: 40}} {...args}/>;

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40
};
