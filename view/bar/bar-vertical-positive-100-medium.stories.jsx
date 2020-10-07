import "./bar-vertical-positive-100-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Vertical +100/Medium',
  argTypes: {
    value: { control: {type: 'range', min: 0, max: 100} },
  },
};

const Template = (args) => <ob-bar-vertical-positive-100-medium style={{height: 256, width: 72}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
