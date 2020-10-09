import "./rot-circle-small";
import React from "react";


export default {
  title: 'INSTRUMENT/ROT/Circle/Small',
  argTypes: {
    rateOfTurn: { control: {type: 'range', min: -360, max: 360} }
  },
};

const Template = (args) => <ob-rot-circle-small style={{width: 64, height: 64}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  rateOfTurn: 4
};
