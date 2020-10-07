import "./bar-horizontal-100-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Horizontal/Medium',
  argTypes: {
    value: { control: {type: 'range', min: -100, max: 100} },
  },
};

const Template = (args) => <ob-bar-horizontal-100-medium style={{width: 256, height: 72}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
