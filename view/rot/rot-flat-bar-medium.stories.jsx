import "./rot-flat-bar-medium";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Flat bar',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -40, max: 40} }
  },
};

const Template = (args, { argTypes }) => <ob-rot-flat-bar-medium style={{width: 256, height: 256}} {...args}/>

export const Medium = Template.bind({});
Medium.args = {
  rateOfTurn: 4
};
