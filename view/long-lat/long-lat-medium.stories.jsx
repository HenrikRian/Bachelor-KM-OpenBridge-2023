import "./long-lat-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/02 A Long - Lat/Medium',
  argTypes: {
    speedLongitudinal: { control: {type: 'range', min: -100, max: 100} },
    speedLatitudinalBack: { control: {type: 'range', min: -100, max: 100} },
    speedLatitudinalFront: { control: {type: 'range', min: -100, max: 100} },
    speedLatitudinalMiddle: { control: {type: 'range', min: -100, max: 100} },
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
  positionOfSensor: 'middle',
};
