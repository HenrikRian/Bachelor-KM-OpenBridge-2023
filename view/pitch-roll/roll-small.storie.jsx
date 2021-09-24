import "./roll-small";
import React from "react";

export default {
  title: "INSTRUMENT/PITCH & ROLL/02 Roll/Small",
  argTypes: {
    roll: { control: { type: "range", min: -6, max: 6, step: 0.1 } },
    lowerRoll: { control: { type: "range", min: -6, max: 6, step: 0.1 } },
    upperRoll: { control: { type: "range", min: -6, max: 6, step: 0.1 } },
    scale: { control: { type: "range", min: 1, max: 10, step: 1 } },
  },
};

const Template = (args) => (
  <ob-roll-small style={{ height: 64, width: 64 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  roll: 2,
  lowerRoll: -2,
  upperRoll: 3,
  scale: 5,
};
