import "./long-lat-small";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/02 A Long - Lat/Small',
  argTypes: {
    speedLongitudinal: { control: {type: 'range', min: -100, max: 100} },
    speedLatitudinalBack: { control: {type: 'range', min: -100, max: 100} },
    speedLatitudinalFront: { control: {type: 'range', min: -100, max: 100} },
    speedLatitudinalMiddle: { control: {type: 'range', min: -100, max: 100} },
  }
};

const Template = (args) => <ob-long-lat-small style={{width: 128, height: 128}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  speedLongitudinal: 48,
  speedLatitudinalBack: 48,
  speedLatitudinalFront: 48,
  speedLatitudinalMiddle: 48,
};
