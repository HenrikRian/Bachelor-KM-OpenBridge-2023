import "./thruster-element-large";
import React from "react";
import {WidthSize} from "./thruster-element-large";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/Thruster Element/Large',
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} },
    width: {
            control: {
                type: 'inline-radio',
                options: [WidthSize.MIN, WidthSize.REGULAR, WidthSize.MAX]
            }
        },
  },
};

const Template = (args) => <ob-thruster-element-large style={{width: 512, height: 80}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
  showArrow: true,
  width: WidthSize.REGULAR
};
