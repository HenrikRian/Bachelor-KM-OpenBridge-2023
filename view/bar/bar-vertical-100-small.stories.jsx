import "./bar-vertical-100-small";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Vertical/Small',
  argTypes: {
    value: { control: {type: 'range', min: -100, max: 100} },
  },
};

const Template = (args) => <ob-bar-vertical-100-small style={{height: 256, width: 72}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
