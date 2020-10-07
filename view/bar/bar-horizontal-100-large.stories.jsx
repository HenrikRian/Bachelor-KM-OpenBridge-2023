import "./bar-horizontal-100-large";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Horizontal/Large',
  argTypes: {
    value: { control: {type: 'range', min: -100, max: 100} },
  },
};

const Template = (args) => <ob-bar-horizontal-100-large style={{width: 512, height: 144}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
