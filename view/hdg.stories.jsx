import './main-view'
import './rot'
import React from "react";

export default {
    title: 'Components',
    argTypes: {
        heading: {control: {type: 'range', min: -360, max: 360}},
    },
}
const Template = (args) => <ob-heading-medium style={{width: 256}} {...args} />;
// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    heading: 30,
};

const Template2 = (args) => <ob-rot style={{width: 256}} {...args} />;
// Each story then reuses that template
export const Speed = Template2.bind({});

Speed.args = {
    heading: 60,
};

