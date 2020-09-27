import WatchFaceMedium from "./WatchFaceMedium";


export default {
  title: 'INSTRUMENT/WatchFace',
  component: WatchFaceMedium,
  argTypes: {
    innerCircle: {
      type: {
        regular: 'Regular',
        portStarboard: 'Port & Starboard',
        positiveNegative: 'Positive & Negative'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WatchFaceMedium },
  template: '<WatchFaceMedium style="width:  256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  innerCircle: 'regular',
  primaryTickmarks: 45,
  secondaryTickmarks: 5,
  cross: false
};
