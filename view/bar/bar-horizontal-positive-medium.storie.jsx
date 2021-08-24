import "./bar-horizontal-positive-medium";
import React from "react";

export default {
  title: "INSTRUMENT/Bars/Horizontal Positive/Medium",
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    range: { control: { type: "range", min: 1, max: 300 } },
  },
};

const Template = (args) => (
  <ob-bar-horizontal-positive-medium
    style={{ height: 72, width: 256 }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  value: 25,
  range: 100,
};
