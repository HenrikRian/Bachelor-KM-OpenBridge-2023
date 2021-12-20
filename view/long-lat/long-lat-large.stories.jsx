import "./long-lat-large";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/02 A Long - Lat/Large',
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

const Template = (args) => <ob-long-lat-large style={{width: 512, height: 512}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  title: 'CCRP',
  speedLongitudinal: 48,
  speedLatitudinalBack: 48,
  speedLatitudinalFront: 48,
  speedLatitudinalMiddle: 48,
  positionOfSensor: 'middle',
};
