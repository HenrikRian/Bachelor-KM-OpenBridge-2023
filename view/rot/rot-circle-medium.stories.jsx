import "./rot-circle-medium";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Circle',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -360, max: 360} }
  },
};

const Template = (args) => <ob-rot-circle-medium style={{width: 256, height: 256}} {...args}/>

export const Medium = Template.bind({});
Medium.args = {
  rateOfTurn: 4
};
