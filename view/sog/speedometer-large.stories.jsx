import "./speedometer-large";
import React from "react";

export default {
  title: "INSTRUMENT/SOG & STW/01 Speedometer/Large",
  argTypes: {
    value: { control: { type: "range", min: 0, max: 20, step: 0.1 } },
    setpoint: { control: { type: "range", min: 0, max: 20 } },
    maxValue: { control: { type: "range", min: 0, max: 100 } },
  },
};

const Template = (args) => (
  <ob-speedometer-medium style={{ width: 512, height: 512 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 5,
  setpoint: 10,
  maxValue: 20
};
