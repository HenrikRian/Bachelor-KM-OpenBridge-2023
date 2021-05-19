import "./long-lat-large";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/02 A Long - Lat/Large',
  argTypes: {
    speedLongitudinal: { control: {type: 'range', min: 0, max: 95} },
    speedLatitudinalBack: { control: {type: 'range', min: 0, max: 95} },
    speedLatitudinalFront: { control: {type: 'range', min: 0, max: 95} },
    speedLatitudinalMiddle: { control: {type: 'range', min: 0, max: 95} },
    positionOfSensor: {
      control: {
        type: 'inline-radio',
        options: ['front', 'middle', 'back']
      }
    }
  }
};

const Template = (args) => <ob-long-lat-large style={{width: 512, height: 512}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  title: 'CCRP',
  speedLongitudinal: 48,
  speedLatitudinalBack: 48,
  speedLatitudinalFront: 48,
  speedLatitudinalMiddle: 48,
  showSpeedLongitudinal: true,
  showSpeedLatitudinalBack: true,
  showSpeedLatitudinalFront: true,
  showSpeedLatitudinalMiddle: false,
  showSpeedLongitudinalFront: true,
  showSpeedLatitudinalBackLeft: true,
  showSpeedLatitudinalFrontLeft: true,
  showSpeedLatitudinalMiddleLeft: true,
  positionOfSensor: 'middle',
};
