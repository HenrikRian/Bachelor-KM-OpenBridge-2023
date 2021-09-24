import "./bar-vertical-small";
import React from "react";

export default {
  title: "INSTRUMENT/Bars/Vertical/Small",
  argTypes: {
    value: { control: { type: "range", min: -100, max: 100 } },
    range: { control: { type: "range", min: 10, max: 200 } },
  },
};

const Template = (args) => (
  <ob-bar-vertical-small style={{ height: 64, width: 64 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 25,
  range: 100,
};
