<template>
  <svg viewBox="-128 -20 256 40">
    <ThrusterElementMedium x="-95" y="-20" width="182" height="40" :show-arrow="false" :value="value" :target="target"/>
  </svg>
</template>

<script>
import MainEngineArrowMedium from '../../generated-with-style/Thruster/MainEngineArrowMedium.svg'
import ThrusterElementMedium from "./ThrusterElementMedium";

const width = 158;

function value2width(value) {
  return -value * width / 200;
}

export default {
  name: "MainEngineMedium",
  components: {
    ThrusterElementMedium,
    MainEngineArrowMedium
  },
  props: {
    target: {required: true, type: Number},
    value: {required: true, type: Number}
  },
}
</script>

<style scoped>

</style>
