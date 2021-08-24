import "./tunnel-thruster-small";
import React from "react";

export default {
  title: "INSTRUMENT/Thruster & Propulsion/02 Tunnel Thruster/Small",
  argTypes: {
    target: { control: { type: "range", min: -100, max: 100 } },
    value: { control: { type: "range", min: -100, max: 100 } },
  },
};

const Template = (args) => (
  <ob-tunnel-thruster-small style={{ width: 64, height: 64 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
};
