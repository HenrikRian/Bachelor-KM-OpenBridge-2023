import "./roll-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/PITCH & ROLL/02 Roll/Medium',
  argTypes: {
    roll: { control: {type: 'range', min: -6, max: 6, step: 0.1} },
    lowerRoll: { control: {type: 'range', min: -6, max: 6, step: 0.1} },
    upperRoll: { control: {type: 'range', min: -6, max: 6, step: 0.1} },
    scale: { control: {type: 'range', min: 1, max: 10, step: 1} },
  },
};

const Template = (args) => <ob-roll-medium style={{height: 256, width: 256}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  roll: 2,
  lowerRoll: -2,
  upperRoll: 3,
  scale: 5
};
