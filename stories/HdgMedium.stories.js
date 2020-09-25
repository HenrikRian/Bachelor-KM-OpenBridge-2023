import HdgMedium from "../gen-vue/HdgMedium";

export default {
  title: 'INSTRUMENT/Heading/Medium',
  component: HdgMedium,
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdgMedium },
  template: '<HdgMedium style="height: 100vh" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  heading: 60
};
