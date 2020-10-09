import "./rot-circle-large";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Circle/Large',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -360, max: 360} }
  },
};

const Template = (args) => <ob-rot-circle-large style={{width: 512, height: 512}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  rateOfTurn: 4
};
