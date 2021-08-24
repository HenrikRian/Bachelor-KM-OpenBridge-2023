import "./pitch-small";
import React from "react";

export default {
  title: "INSTRUMENT/PITCH & ROLL/01 Pitch/Small",
  argTypes: {
    pitch: { control: { type: "range", min: -6, max: 6, step: 0.1 } },
    lowerPitch: { control: { type: "range", min: -6, max: 6, step: 0.1 } },
    upperPitch: { control: { type: "range", min: -6, max: 6, step: 0.1 } },
    scale: { control: { type: "range", min: 1, max: 10, step: 1 } },
  },
};

const Template = (args) => (
  <ob-pitch-small style={{ height: 64, width: 64 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pitch: 2,
  lowerPitch: -2,
  upperPitch: 3,
  scale: 5,
};
