import "./bar-horizontal-positive-small";
import React from "react";

export default {
  title: "INSTRUMENT/Bars/Horizontal Positive/Small",
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
  },
};

const Template = (args) => (
  <ob-bar-horizontal-positive-small
    style={{ height: 64, width: 64 }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  value: 25,
};
