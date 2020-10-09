import "./rot-flat-bar-large";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Flat bar/Large',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -40, max: 40} }
  },
};

const Template = (args) => <ob-rot-flat-bar-large style={{width: 512, height: 56}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  rateOfTurn: 4
};
