import ThrusterElementMedium from "./ThrusterElementMedium";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/Thruster Element',
  component: ThrusterElementMedium,
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ThrusterElementMedium },
  template: '<ThrusterElementMedium style="width: 256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40
};
