import "./thruster-element-small";
import React from "react";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/Thruster Element/Small',
  argTypes: {
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args) => <ob-thruster-element-small style={{width: 64, height: 64}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  value: 40,
  showArrow: true
};
