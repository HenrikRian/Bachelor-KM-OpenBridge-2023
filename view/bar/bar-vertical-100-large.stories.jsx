import "./bar-vertical-100-large";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Vertical/Large',
  argTypes: {
    value: { control: {type: 'range', min: -100, max: 100} },
  },
};

const Template = (args) => <ob-bar-vertical-100-large style={{height: 512, width: 144}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
