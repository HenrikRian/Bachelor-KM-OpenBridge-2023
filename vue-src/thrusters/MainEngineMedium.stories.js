
import MainEngineMedium from "./MainEngineMedium";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/03 Main Engine',
  component: MainEngineMedium,
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MainEngineMedium },
  template: '<MainEngineMedium style="height: 256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40
};
