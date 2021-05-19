import "./long-lat-small";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/02 A Long - Lat/Small',
  argTypes: {
    
  }
};

const Template = (args) => <ob-long-lat-small style={{width: 128, height: 128}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  showSpeedLongitudinal: true,
  showSpeedLatitudinalBack: true,
  showSpeedLatitudinalFront: true,
  showSpeedLatitudinalMiddle: false,
  showSpeedLongitudinalFront: true,
  showSpeedLatitudinalBackLeft: true,
  showSpeedLatitudinalFrontLeft: true,
  showSpeedLatitudinalMiddleLeft: true,
};
