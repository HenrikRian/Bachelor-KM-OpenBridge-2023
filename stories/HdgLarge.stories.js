import HdgLarge from '../gen-vue/HdgLarge.vue';

export default {
  title: 'INSTRUMENT/Heading',
  component: HdgLarge,
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdgLarge },
  template: '<HdgLarge style="height: 100vh" v-bind="$props"/>',
});

export const Large = Template.bind({});
Large.args = {
  heading: 60
};
