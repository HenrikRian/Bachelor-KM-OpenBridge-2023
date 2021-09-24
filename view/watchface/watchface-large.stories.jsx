import "./watchface-large";
import React from "react";
import { InnerWatchFaceType } from "../models";

export default {
  title: "INSTRUMENT/WatchFace/Large",
  argTypes: {
    innerCircle: {
      control: {
        type: "inline-radio",
        options: [
          InnerWatchFaceType.REGULAR,
          InnerWatchFaceType.PORT_STARBOARD,
          InnerWatchFaceType.POSITIVE_NEGATIVE,
        ],
      },
    },
    rotate: { control: { type: "range", min: 0, max: 360 } },
    primaryTickmarks: {
      control: {
        type: "range",
        min: 10,
        max: 180,
      },
    },
    secondaryTickmarks: {
      control: {
        type: "range",
        min: 2,
        max: 90
      },
    },
    startClipDeg: { control: { type: "range", min: -360, max: 360 } },
    endClipDeg: { control: { type: "range", min: 0, max: 360 } },
  },
};

const Template = (args) => (
  <ob-watchface-large style={{ width: 512 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  innerCircle: InnerWatchFaceType.REGULAR,
  rotate: 0,
  primaryTickmarks: 45,
  secondaryTickmarks: 10,
  cross: false,
  showLabels: true,
  showArrow: true,
  nsew: true,
  bold: true,
  startClipDeg: 0,
  endClipDeg: 0,
};
