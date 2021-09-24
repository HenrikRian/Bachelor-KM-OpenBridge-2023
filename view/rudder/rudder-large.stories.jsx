import "./rudder-large";
import React from "react";

export default {
  title: "INSTRUMENT/RUDDER/Large",
  argTypes: {
    rudderAngle: { control: { type: "range", min: -90, max: 90 } },
    rudderSetPointAngle: { control: { type: "range", min: -90, max: 90 } },
    clipAngle: { control: { type: "range", min: 0, max: 90 } },
  },
};

const Template = (args) => (
  <ob-rudder-large style={{ height: 512, width: 512 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rudderAngle: 20,
  rudderSetPointAngle: 0,
  clipAngle: 90,
  showPortStarboard: true,
  showSetPoint: true,
};
