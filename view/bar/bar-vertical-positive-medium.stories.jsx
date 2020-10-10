import "./bar-vertical-positive-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Vertical Positive/Medium',
  argTypes: {
    value: { control: {type: 'range', min: 0, max: 100} },
  },
};

const Template = (args) => <ob-bar-vertical-positive-medium style={{height: 256, width: 72}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
