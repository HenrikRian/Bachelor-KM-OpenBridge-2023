<template>
  <svg viewBox="-256 -40 512 80">
    <ThrusterStaticLarge y="-40" x="-160"/>
    <FrontArrowLarge y="-40" x="-192" v-if="showArrow"/>
    <PointerLarge y="-1" x="160" v-if="showArrow"/>
    <rect id="Bar" :x="xValue" y="-24" :width="widthValue" height="48" fill="#0080FF"
          class="ob-instrument-dynamic-color-fill"/>
    <rect id="EndLine" width="2" height="64" y="-32" :x="xBar" fill="#0080FF"
          class="ob-instrument-dynamic-color-fill"/>
    <ThrusterPowerInputLarge :x="xTarget" y="-40"/>
  </svg>
</template>

<script>
import ThrusterStaticLarge from '../../generated-with-style/Thruster/ThrusterStaticLarge.svg'
import ThrusterPowerInputLarge from '../../generated-with-style/Thruster/ThrusterPowerInputLarge.svg'
import ThrusterPowerLarge from '../../generated-with-style/Thruster/ThrusterPowerLarge.svg'
import FrontArrowLarge from '../../generated-with-style/Thruster/FrontArrowLarge.svg'
import PointerLarge from '../../generated-with-style/Thruster/PointerLarge.svg'

const width = 319;

function value2width(value) {
  return -value * width / 200;
}

export default {
  name: "ThrusterElementLarge",
  components: {
    ThrusterStaticLarge,
    ThrusterPowerInputLarge,
    ThrusterPowerLarge,
    FrontArrowLarge,
    PointerLarge
  },
  props: {
    target: {required: true, type: Number},
    value: {required: true, type: Number},
    showArrow: {required: false, default: true, type: Boolean}
  },
  computed: {
    xTarget: function () {
      return value2width(this.target) - 2;
    },
    xValue: function () {
      if (this.value > 0) {
        return value2width(this.value);
      } else {
        return 0;
      }
    },
    xBar: function () {
      return value2width(this.value) -1;
    },
    widthValue: function () {
      return Math.abs(value2width(this.value));
    }
  }
}
</script>

<style scoped>

</style>
