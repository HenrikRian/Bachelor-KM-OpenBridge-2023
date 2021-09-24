import "./main-engine-large";
import React from "react";

export default {
  title: "INSTRUMENT/Thruster & Propulsion/03 Main Engine/Large",
  argTypes: {
    target: { control: { type: "range", min: -100, max: 100 } },
    value: { control: { type: "range", min: -100, max: 100 } },
    suggestedSetpoint: { control: { type: "range", min: -100, max: 100 } },
    showSetPoint: { control: "boolean" },
    showTickmarks: { control: "boolean" },
    showSuggestedSetPoint: { control: "boolean" },
  },
};

const Template = (args) => (
  <ob-main-engine-large style={{ width: 80, height: 512 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
  suggestedSetpoint: 20,
  showSetPoint: true,
  showTickmarks: true,
  showSuggestedSetPoint: true,
};
