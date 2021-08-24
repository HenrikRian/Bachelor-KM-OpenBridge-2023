import "./rudder-small";
import React from "react";

export default {
  title: "INSTRUMENT/RUDDER/Small",
  argTypes: {
    rudderAngle: { control: { type: "range", min: -90, max: 90 } },
    clipAngle: { control: { type: "range", min: 0, max: 90 } },
  },
};

const Template = (args) => (
  <ob-rudder-small style={{ height: 64, width: 64 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rudderAngle: 20,
  clipAngle: 90,
  showPortStarboard: true,
};
