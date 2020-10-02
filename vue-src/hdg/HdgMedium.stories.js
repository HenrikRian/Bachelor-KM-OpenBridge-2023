import HdgMedium from "./HdgMedium";


export default {
  title: 'INSTRUMENT/HDG & COG/Circular HDG',
  component: HdgMedium,
  argTypes: {
    heading: { control: {type: 'range', min: 0, max: 360} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdgMedium },
  template: '<HdgMedium style="height: 256px" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  heading: 60,
  northUp: true
};
