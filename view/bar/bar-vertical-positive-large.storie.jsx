import "./bar-vertical-positive-large";
import React from "react";

export default {
  title: "INSTRUMENT/Bars/Vertical Positive/Large",
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    range: { control: { type: "range", min: 1, max: 300 } },
  },
};

const Template = (args) => (
  <ob-bar-vertical-positive-large
    style={{ height: 512, width: 144 }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  value: 25,
  range: 100,
};
