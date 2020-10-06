import "./rot-flat-medium";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Flat',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -40, max: 40} }
  },
};

const Template = (args) => <ob-rot-flat-medium style={{width: 256, height: 56}} {...args}/>

export const Medium = Template.bind({});
Medium.args = {
  rateOfTurn: 4
};
