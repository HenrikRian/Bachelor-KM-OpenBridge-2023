import "./bar-horizontal-large";
import React from "react";

export default {
  title: "INSTRUMENT/Bars/Horizontal/Large",
  argTypes: {
    value: { control: { type: "range", min: -100, max: 100 } },
    range: { control: { type: "range", min: 1, max: 300 } },
  },
};

const Template = (args) => (
  <ob-bar-horizontal-large style={{ width: 512, height: 144 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 25,
  range: 100,
};
