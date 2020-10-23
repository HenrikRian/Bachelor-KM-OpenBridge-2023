import "./hdg-flat-large";
import React from "react";

export default {
  title: 'INSTRUMENT/HDG & COG/Flat HDG/Large',
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
    courseOverGround: { control: {type: 'range', min: 0, max: 360} },
    watchFaceResolution: {control: {type: 'inline-radio', options: [30, 45]}}
  },
};

const Template = (args) => <ob-hdg-flat-large style={{height: 112, width: 512}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  heading: 60,
  courseOverGround: 55,
  northUp: true,
  watchFaceResolution: 45
};
