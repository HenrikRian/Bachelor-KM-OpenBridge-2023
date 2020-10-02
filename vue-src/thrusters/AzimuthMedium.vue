<template>
  <svg viewBox="-128 -128 256 256">
    <WatchFaceMedium width="256" height="256" x="-128" y="-128"
                     inner-circle="regular"
                     :primary-tickmarks="90"
                     :secondary-tickmarks="10"
                     :show-labels="false"
    />
    <g :transform="rotate">
      <ThrusterElementMedium :target="target" :value="value" width="256" height="40" x="-128" y="-20"/>
    </g>
  </svg>
</template>

<script>
import AzimuthWatchFaceMedium from '../../generated-with-style/Thruster/AzimuthWatchFaceMedium.svg'
import ThrusterElementMedium from "./ThrusterElementMedium";
import WatchFaceMedium from "../watchface/WatchFaceMedium";

const width = 158;

function value2width(value) {
  return -value * width / 200;
}

export default {
  name: "AzimuthMedium",
  components: {
    WatchFaceMedium,
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
      return `rotate(${this.angle + 90} 0 0)`;
    }
  }
}
</script>

<style scoped>

</style>
