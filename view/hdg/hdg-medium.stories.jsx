import "./hdg-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG/Medium',
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args) => <ob-hdg-medium style={{height: 256, width: 256}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  heading: 60,
  courseOverGround: 55,
  northUp: true
};
