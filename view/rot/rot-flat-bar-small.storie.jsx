import "./rot-flat-bar-small";
import React from "react";

export default {
  title: "INSTRUMENT/ROT/Flat bar/Small",
  argTypes: {
    rateOfTurn: { control: { type: "range", min: -40, max: 40 } },
  },
};

const Template = (args) => (
  <ob-rot-flat-bar-small style={{ width: 64, height: 24 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rateOfTurn: 4,
};
