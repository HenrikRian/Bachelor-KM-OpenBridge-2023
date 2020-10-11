import "./tunnel-thruster-large";
import React from "react";
import {WidthSize} from "./thruster-element-large";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/02 Tunnel Thruster/Large',
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

const Template = (args) => <ob-tunnel-thruster-large style={{width: 512, height: 512}} {...args}/>

export const Default = Template.bind({});
Default.args = {
  target: 60,
  value: 40,
  width: WidthSize.REGULAR
};
