import "./long-lat-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/02 A Long - Lat/Medium',
  argTypes: {
    speedLongitudinal: { control: {type: 'range', min: 0, max: 49} },
    speedLatitudinalBack: { control: {type: 'range', min: 0, max: 49} },
    speedLatitudinalFront: { control: {type: 'range', min: 0, max: 49} },
    speedLatitudinalMiddle: { control: {type: 'range', min: 0, max: 49} },
    positionOfSensor: {
      control: {
        type: 'inline-radio',
        options: ['front', 'middle', 'back']
      }
    }
  }
};

const Template = (args) => <ob-long-lat-medium style={{width: 256, height: 256}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  title: 'CCRP',
  speedLongitudinal: 25,
  speedLatitudinalBack: 25,
  speedLatitudinalFront: 25,
  speedLatitudinalMiddle: 25,
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
