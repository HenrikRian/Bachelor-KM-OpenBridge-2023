import RotFlatBarMedium from "./RotFlatBarMedium";


export default {
  title: 'INSTRUMENT/ROT/Flat bar',
  component: RotFlatBarMedium,
  argTypes: {
    value: { control: {type: 'range', min: -40, max: 40} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RotFlatBarMedium },
  template: '<RotFlatBarMedium style="width: 256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  value: 4
};
