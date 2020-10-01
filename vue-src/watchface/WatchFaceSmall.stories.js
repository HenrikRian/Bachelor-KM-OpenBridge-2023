import WatchFaceSmall from "./WatchFaceSmall";


export default {
    title: 'INSTRUMENT/WatchFace',
    component: WatchFaceSmall,
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
        startClipDeg: { control: {type: 'range', min: -360, max: 360} },
        endClipDeg: { control: {type: 'range', min: 0, max: 360} },
    }
};

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {WatchFaceSmall},
    template: '<WatchFaceSmall style="width: 128px;" v-bind="$props"/>',
});

export const Small = Template.bind({});
Small.args = {
    innerCircle: 'regular',
    rotate: 0,
    primaryTickmarks: 45,
    cross: false,
    startClipDeg: 0,
    endClipDeg: 0,
};
