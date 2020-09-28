<template>
  <svg viewBox="-128 -20 256 40">
      <ThrusterStaticMedium y="-20" x="-80"/>
      <FrontArrowMedium y="-20" x="-96" v-if="showArrow"/>
      <PointerMedium y="-.5" x="80" v-if="showArrow"/>
      <rect id="Bar" :x="xValue" y="-12" :width="widthValue" height="24" fill="#0080FF"
            class="ob-instrument-dynamic-color-fill"/>
      <ThrusterPowerInputMedium :x="xTarget" y="-20"/>
  </svg>
</template>

<script>
import ThrusterStaticMedium from '../../generated-with-style/Thruster/ThrusterStaticMedium.svg'
import ThrusterPowerInputMedium from '../../generated-with-style/Thruster/ThrusterPowerInputMedium.svg'
import ThrusterPowerMedium from '../../generated-with-style/Thruster/ThrusterPowerMedium.svg'
import FrontArrowMedium from '../../generated-with-style/Thruster/FrontArrowMedium.svg'
import MainEngineArrowMedium from '../../generated-with-style/Thruster/MainEngineArrowMedium.svg'
import PointerMedium from '../../generated-with-style/Thruster/PointerMedium.svg'

const width = 158;

function value2width(value) {
  return -value * width / 200;
}

export default {
  name: "ThrusterElementMedium",
  components: {
    ThrusterStaticMedium,
    ThrusterPowerInputMedium,
    ThrusterPowerMedium,
    FrontArrowMedium,
    PointerMedium,
    MainEngineArrowMedium
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
    widthValue: function () {
      return Math.abs(value2width(this.value));
    }
  }
}
</script>

<style scoped>

</style>
