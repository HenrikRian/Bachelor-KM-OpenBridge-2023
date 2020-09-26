import AzimuthMedium from "./AzimuthMedium";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/01 Azimuth thruster',
  component: AzimuthMedium,
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} },
    angle: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AzimuthMedium },
  template: '<AzimuthMedium style="width: 256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40,
  angle: 45
};
