import "./hdg-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG',
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args) => <ob-hdg-medium style={{height: 256, width: 256}} {...args}/>;

export const Medium = Template.bind({});
Medium.args = {
  heading: 60,
  northUp: true
};
