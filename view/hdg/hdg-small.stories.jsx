import "./hdg-small";
import React from "react";

export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG/Small',
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
    courseOverGround: { control: {type: 'range', min: 0, max: 360} },
    northUp: {control: {type: 'boolean'}, description: "True north is always up, false if heading is always up"},
    showCog: {control: {type: 'boolean'}, description: "True if course over ground arrow should be shown, False if heading arrow should be shown."}
  },
};

const Template = (args) => <ob-hdg-small style={{height: 64, width: 64}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  heading: 60,
  courseOverGround: 55,
  northUp: true,
  showCog: false
};
