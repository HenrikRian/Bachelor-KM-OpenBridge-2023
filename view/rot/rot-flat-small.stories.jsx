import "./rot-flat-small";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Flat/Small',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -40, max: 40} }
  },
};

const Template = (args) => <ob-rot-flat-small style={{width: 64, height: 56}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  rateOfTurn: 4
};
