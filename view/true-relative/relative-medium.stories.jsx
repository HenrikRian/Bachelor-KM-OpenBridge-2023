import "./relative-medium";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/03 True - Relative/Medium',
  argTypes: {
      rotate: { control: {type: 'range', min: 0, max: 360} },
      rotateShip: { control: {type: 'range', min: 0, max: 360} },
      rotateHdg: { control: {type: 'range', min: 0, max: 360} },
      speedHdg: { control: {type: 'range', min: 0, max: 100} },
      rotateCog: { control: {type: 'range', min: 0, max: 360} },
      speedCog: { control: {type: 'range', min: 0, max: 100} },
      rotateCurrent: { control: {type: 'range', min: 0, max: 360} },
      rotateWind: { control: {type: 'range', min: 0, max: 360} },
  }
};

const Template = (args) => <ob-relative-medium style={{width: 256, height: 256}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    northUp: true,
    typeOfLabel: true,
    rotate: 0,
    rotateHdg: 340,
    speedHdg: 44,
    rotateCog: 305,
    speedCog: 44,
    rotateShip: 0,
    rotateWind: 35,
    rotateCurrent: 70
};
