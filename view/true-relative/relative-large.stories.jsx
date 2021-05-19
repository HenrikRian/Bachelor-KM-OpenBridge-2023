import "./relative-large";
import React from "react";

export default {
  title: 'INSTRUMENT/SOG & STW/03 True - Relative/Large',
  argTypes: {
      rotate: { control: {type: 'range', min: 0, max: 360} },
      rotateShip: { control: {type: 'range', min: 0, max: 360} },
      rotateHdg: { control: {type: 'range', min: 0, max: 360} },
      speedHdg: { control: {type: 'range', min: 0, max: 128} },
      rotateCog: { control: {type: 'range', min: 0, max: 360} },
      speedCog: { control: {type: 'range', min: 0, max: 128} },
      rotateCurrent: { control: {type: 'range', min: 0, max: 360} },
      rotateWind: { control: {type: 'range', min: 0, max: 360} },
  }
};

const Template = (args) => <ob-relative-large style={{width: 512, height: 512}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    northUp: true,
    typeOfLabel: true,
    rotate: 0,
    rotateHdg: 340,
    rotateCog: 305,
    rotateShip: 0,
    rotateWind: 35,
    rotateCurrent: 70,
    speedHdg: 97
};