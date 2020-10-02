import HdgSmall from "./HdgSmall";

export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG',
  component: HdgSmall,
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdgSmall },
  template: '<HdgSmall style="height: 64px" v-bind="$props"/>',
});

export const Small = Template.bind({});
Small.args = {
  heading: 60,
  northUp: true
};
