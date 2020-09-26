<template>
  <svg viewBox="-95 -20 182 40">
      <ThrusterTickmarksMedium y="-19" x="-79"/>
      <ThrusterTrackMedium y="-12" x="-79"/>
      <FrontArrowMedium y="-20" x="-95" v-if="showArrow"/>
      <PointerMedium y="-.5" x="79" v-if="showArrow"/>
      <ThrusterCenterLineMedium x="-1" y="-20"/>
      <rect id="Bar" :x="xValue" y="-12" :width="widthValue" height="24" fill="#0080FF"
            class="ob-instrument-dynamic-color-fill"/>
      <ThrusterPowerInputMedium :x="xTarget" y="-20"/>
  </svg>
</template>

<script>
import ThrusterTrackMedium from '../../generated-with-style/Thruster/ThrusterTrackMedium.svg'
import ThrusterCenterLineMedium from '../../generated-with-style/Thruster/ThrusterCenterLineMedium.svg'
import ThrusterTickmarksMedium from '../../generated-with-style/Thruster/ThrusterTickmarksMedium.svg'
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
    ThrusterTrackMedium,
    ThrusterCenterLineMedium,
    ThrusterTickmarksMedium,
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
