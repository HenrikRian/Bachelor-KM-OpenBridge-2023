import "./fixed-font-size";
import React from "react";


export default {
    title: 'TEST',
    argTypes: {
    },
};


const Template = (args) => <div>
    <test-fixed-font-size style={{width: 512, height: 512}} {...args}/>
    <test-fixed-font-size style={{width: 128, height: 128}} {...args}/>
</div>;

export const Default = Template.bind({});
Default.args = {
};
