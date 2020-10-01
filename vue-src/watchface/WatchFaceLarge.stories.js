import WatchFaceLarge from "./WatchFaceLarge";


export default {
    title: 'INSTRUMENT/WatchFace',
    component: WatchFaceLarge,
    argTypes: {
        innerCircle: {
            control: {
                type: 'inline-radio',
                options: ['regular', 'portStarboard', 'positiveNegative']
            }
        },
        rotate: { control: {type: 'range', min: 0, max: 360} },
        primaryTickmarks: {
            control: {
                type: 'inline-radio',
                options: [30, 45, 90]
            }
        },
        secondaryTickmarks: {
            control: {
                type: 'inline-radio',
                options: [5, 9, 10]
            }
        },
        startClipDeg: { control: {type: 'range', min: -360, max: 360} },
        endClipDeg: { control: {type: 'range', min: 0, max: 360} },
    }
};

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {WatchFaceLarge},
    template: '<WatchFaceLarge style="width: 512px;" v-bind="$props"/>',
});

export const Large = Template.bind({});
Large.args = {
    innerCircle: 'regular',
    rotate: 0,
    primaryTickmarks: 45,
    secondaryTickmarks: 5,
    cross: false,
    startClipDeg: 0,
    endClipDeg: 0,
};
