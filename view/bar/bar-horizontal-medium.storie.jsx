import "./bar-horizontal-medium";
import React from "react";

export default {
  title: "INSTRUMENT/Bars/Horizontal/Medium",
  argTypes: {
    value: { control: { type: "range", min: -100, max: 100 } },
    range: { control: { type: "range", min: 1, max: 300 } },
  },
};

const Template = (args) => (
  <ob-bar-horizontal-medium style={{ width: 256, height: 72 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 25,
  range: 100,
};
