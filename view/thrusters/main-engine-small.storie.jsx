import "./main-engine-small";
import React from "react";

export default {
  title: "INSTRUMENT/Thruster & Propulsion/03 Main Engine/Small",
  argTypes: {
    target: { control: { type: "range", min: -100, max: 100 } },
    value: { control: { type: "range", min: -100, max: 100 } },
  },
};

const Template = (args) => (
  <ob-main-engine-small style={{ width: 40, height: 64 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
};
