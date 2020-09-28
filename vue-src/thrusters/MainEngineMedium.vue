<template>
  <svg viewBox="-20 -128 40 256">
    <MainEngineArrowMedium y="-89" x="-20" width="40" height="9"/>
    <g transform="rotate(90)">
      <ThrusterElementMedium x="-128" y="-20" width="256" height="40" :show-arrow="false" :value="value" :target="target"/>
    </g>
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
