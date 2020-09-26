import TunnelThrusterMedium from "./TunnelThrusterMedium";


export default {
  title: 'INSTRUMENT/Thruster & Propulsion/02 Tunnel Thruster',
  component: TunnelThrusterMedium,
  argTypes: {
    target: { control: {type: 'range', min: -100, max: 100} },
    value: { control: {type: 'range', min: -100, max: 100} }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TunnelThrusterMedium },
  template: '<TunnelThrusterMedium style="width: 256px;" v-bind="$props"/>',
});

export const Medium = Template.bind({});
Medium.args = {
  target: 60,
  value: 40
};
