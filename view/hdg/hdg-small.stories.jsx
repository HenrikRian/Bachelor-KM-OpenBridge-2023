import "./hdg-small";
import React from "react";

export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG/Small',
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args) => <ob-hdg-small style={{height: 64, width: 64}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  heading: 60,
  northUp: true
};
