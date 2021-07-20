import "./hdg-large";
import React from "react";

export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG/Large',
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
    courseOverGround: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args) => <ob-hdg-large style={{height: 512, width: 512}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  heading: 60,
  courseOverGround: 55,
  northUp: true
};
