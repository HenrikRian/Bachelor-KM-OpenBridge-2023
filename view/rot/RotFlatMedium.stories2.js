import RotFlatMedium from "./RotFlatMedium";


export default {
  title: 'INSTRUMENT/ROT/Flat',
  component: RotFlatMedium,
  argTypes: {
    value: { control: {type: 'range', min: -40, max: 40} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RotFlatMedium },
  template: '<RotFlatMedium style="width:  256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  value: 4
};
