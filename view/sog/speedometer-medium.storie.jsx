import "./speedometer-medium";
import React from "react";

export default {
  title: "INSTRUMENT/SOG & STW/01 Speedometer/Medium",
  argTypes: {
    value: { control: { type: "range", min: -5, max: 25 } },
  },
};

const Template = (args) => (
  <ob-speedometer-medium style={{ width: 256, height: 256 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 5,
};
