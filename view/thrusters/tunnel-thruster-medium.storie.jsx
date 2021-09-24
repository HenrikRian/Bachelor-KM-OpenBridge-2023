import "./tunnel-thruster-medium";
import React from "react";

export default {
  title: "INSTRUMENT/Thruster & Propulsion/02 Tunnel Thruster/Medium",
  argTypes: {
    target: { control: { type: "range", min: -100, max: 100 } },
    value: { control: { type: "range", min: -100, max: 100 } },
  },
};

const Template = (args) => (
  <ob-tunnel-thruster-medium style={{ width: 256, height: 256 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
  showSetPoint: true,
};
