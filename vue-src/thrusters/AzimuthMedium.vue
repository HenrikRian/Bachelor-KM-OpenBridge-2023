<template>
  <svg viewBox="0 0 256 256">
    <AzimuthWatchFaceMedium/>
    <g :transform="rotate">
      <ThrusterElementMedium :target="target" :value="value" width="182" height="40" x="34" y="108"/>
    </g>
  </svg>
</template>

<script>
import AzimuthWatchFaceMedium from '../../generated-with-style/Thruster/AzimuthWatchFaceMedium.svg'
import ThrusterElementMedium from "./ThrusterElementMedium";

const width = 158;

function value2width(value) {
  return -value * width / 200;
}

export default {
  name: "AzimuthMedium",
  components: {
    ThrusterElementMedium,
    AzimuthWatchFaceMedium
  },
  props: {
    target: {required: true, type: Number},
    value: {required: true, type: Number},
    angle: {required: true, type: Number},
  },
  computed: {
    xTarget: function () {
      return value2width(this.target) - 2;
    },
    xValue: function () {
      if (this.value > 0) {
        return value2width(this.value);
      } else {
        return width / 2;
      }
    },
    widthValue: function () {
      return Math.abs(value2width(this.value));
    },
    rotate: function () {
      return `rotate(${this.angle + 90} 128 128)`;
    }
  }
}
</script>

<style scoped>

</style>
