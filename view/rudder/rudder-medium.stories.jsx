import "./rudder-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/RUDDER/Medium',
  argTypes: {
    rudderAngle: { control: {type: 'range', min: -90, max: 90} },
    rudderSetPointAngle: { control: {type: 'range', min: -90, max: 90} },
    clipAngle: { control: {type: 'range', min: 0, max: 90} }
  },
};

const Template = (args) => <ob-rudder-medium style={{height: 256, width: 256}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  rudderAngle: 20,
  rudderSetPointAngle: 0,
  clipAngle: 90,
  showPortStarboard: true,
  showSetPoint: true
};
