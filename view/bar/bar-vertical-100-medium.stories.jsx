import "./bar-vertical-100-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Vertical/Medium',
  argTypes: {
    value: { control: {type: 'range', min: -100, max: 100} },
  },
};

const Template = (args) => <ob-bar-vertical-100-medium style={{height: 256, width: 72}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
