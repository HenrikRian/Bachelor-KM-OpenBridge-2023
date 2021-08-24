import "./hdg-large";
import React from "react";

export default {
  title: "INSTRUMENT/HDG & COG/Circular HDG/Large",
  argTypes: {
    heading: {
      control: { type: "range", min: 0, max: 360 },
      description: "Heading in degree",
    },
    courseOverGround: {
      control: { type: "range", min: 0, max: 360 },
      description: "Course over ground in degree",
    },
    setPoint: {
      control: { type: "range", min: 0, max: 360 },
      description: "Set point in degree",
    },
    northUp: {
      control: { type: "boolean" },
      description: "True north is always up, false if heading is always up",
    },
    showCourseOverGround: {
      control: { type: "boolean" },
      description: "Show course over ground arrow",
    },
    showSetPoint: {
      control: { type: "boolean" },
      description: "Show set point arrow arrow",
    },
  },
};

const Template = (args) => (
  <ob-hdg-large style={{ height: 512, width: 512 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: 60,
  courseOverGround: 55,
  setPoint: 40,
  northUp: true,
  showCourseOverGround: true,
  showSetPoint: true,
};
