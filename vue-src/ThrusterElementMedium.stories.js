import ThrusterElementMedium from "./ThrusterElementMedium";


export default {
  title: 'INSTRUMENT/Thruster/Medium',
  component: ThrusterElementMedium,
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ThrusterElementMedium },
  template: '<ThrusterElementMedium style="width: 5cm;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40
};
