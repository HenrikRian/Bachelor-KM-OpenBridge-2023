import "./rot-flat-bar-medium";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Flat bar/Medium',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -40, max: 40} }
  },
};

const Template = (args) => <ob-rot-flat-bar-medium style={{width: 256, height: 56}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  rateOfTurn: 4
};
