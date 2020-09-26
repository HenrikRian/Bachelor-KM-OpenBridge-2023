import HdgLarge from '../gen-vue/HdgLarge.vue';

export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG',
  component: HdgLarge,
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
    cog: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdgLarge },
  template: '<HdgLarge style="height: 512px" v-bind="$props"/>',
});

export const Large = Template.bind({});
Large.args = {
  heading: 60,
  cog: 30
};
