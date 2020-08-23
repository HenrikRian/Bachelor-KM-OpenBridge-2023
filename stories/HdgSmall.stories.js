import HdgMedium from "../gen-vue/HdgMedium";
import HdgSmall from "../gen-vue/HdgSmall";

export default {
  title: 'INSTRUMENT/Heading',
  component: HdgSmall,
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdgSmall },
  template: '<HdgSmall style="height: 100vh" v-bind="$props"/>',
});

export const Small = Template.bind({});
Small.args = {
  heading: 60
};
