import "./bar-vertical-positive-100-small";
import React from "react";

export default {
  title: 'INSTRUMENT/Bars/Vertical +100/Small',
  argTypes: {
    value: { control: {type: 'range', min: 0, max: 100} },
  },
};

const Template = (args) => <ob-bar-vertical-positive-100-small style={{height: 64, width: 64}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 25
};
