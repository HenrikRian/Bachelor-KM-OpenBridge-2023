import SpeedometerMedium from "./SpeedometerMedium";


export default {
    title: 'INSTRUMENT/SOG & STW/01 Speedometer',
    component: SpeedometerMedium,
    argTypes: {
        value: {control: {type: 'range', min: -5, max: 25}}
    },
};

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SpeedometerMedium},
    template: '<SpeedometerMedium style="width:  256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
    value: 5,
};
