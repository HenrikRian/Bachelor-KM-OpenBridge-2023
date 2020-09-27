import RotCircleMedium from "./RotCircleMedium";


export default {
  title: 'INSTRUMENT/ROT/Circle',
  component: RotCircleMedium,
  argTypes: {
    value: { control: {type: 'range', min: -360, max: 360} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RotCircleMedium },
  template: '<RotCircleMedium style="width: 256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  value: 4
};
