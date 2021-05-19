import "./relative-small";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/03 True - Relative/Small',
  argTypes: {
      rotate: { control: {type: 'range', min: 0, max: 360} },
      rotateHdg: { control: {type: 'range', min: 0, max: 360} },
      rotateCog: { control: {type: 'range', min: 0, max: 360} },
  }
};

const Template = (args) => <ob-relative-small style={{width: 128, height: 128}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    northUp: true,
    rotate: 0,
    rotateHdg: 340,
    rotateCog: 305
};
