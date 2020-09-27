import ThrusterElementLarge from "./ThrusterElementLarge";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/Thruster Element',
  component: ThrusterElementLarge,
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ThrusterElementLarge },
  template: '<ThrusterElementLarge style="width: 512px;" v-bind="$props"/>',
});

export const Large = Template.bind({});
Large.args = {
  target: 60,
  value: 40
};
