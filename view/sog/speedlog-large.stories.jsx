import "./speedlog-large";
import React from "react";
import {CurrentSpeed, WindSpeed} from "../models";


export default {
    title: 'INSTRUMENT/SOG & STW/03 True - Relative/Large',
    argTypes: {
        speedTrue: {control: {type: 'range', min: 0, max: 100}},
        courseTrue: {control: {type: 'range', min: 0, max: 360}},
        speedRelative: {control: {type: 'range', min: 0, max: 100}},
        courseRelative: {control: {type: 'range', min: 0, max: 360}},
        heading: {control: {type: 'range', min: 0, max: 360}},
        windFromDirection: {control: {type: 'range', min: 0, max: 360}},
        windSpeed: {
            control: {
                type: 'inline-radio',
                options: Object.values(WindSpeed)
            }
        },
        currentFromDirection: {control: {type: 'range', min: 0, max: 360}},
        currentSpeed: {
            control: {
                type: 'inline-radio',
                options: Object.values(CurrentSpeed)
            }
        }
    },
};

const Template = (args) => <ob-speedlog-large style={{width: 512, height: 512}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
    speedTrue: 50,
    courseTrue: 300,
    speedRelative: 40,
    courseRelative: 270,
    heading: 310,
    windSpeed: WindSpeed.LIGHT_AIR_1,
    windFromDirection: 20,
    currentSpeed: CurrentSpeed.GENTLE,
    currentFromDirection: 50
};
