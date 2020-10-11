import "./main-engine-medium";
import React from "react";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/03 Main Engine/Medium',
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args) => <ob-main-engine-medium style={{width: 40, height: 256}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
};
