import "./azimuth-medium";
import React from "react";

export default {
  title: "INSTRUMENT/Thruster & Propulsion/01 Azimuth thruster/Medium",
  argTypes: {
    target: { control: { type: "range", min: -100, max: 100 } },
    value: { control: { type: "range", min: -100, max: 100 } },
    angle: { control: { type: "range", min: 0, max: 360 } },
    targetAngle: { control: { type: "range", min: 0, max: 360 } },
  },
};

const Template = (args) => (
  <ob-azimuth-medium style={{ width: 256, height: 256 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
  angle: 45,
  targetAngle: 20,
  showPortStarboard: false,
  showSetPointValue: true,
  showSetPointAngle: true,
};
