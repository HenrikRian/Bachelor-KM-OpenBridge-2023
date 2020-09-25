<template>
  <svg viewBox="-16 -20 182 40">
    <ThrusterTrackMedium y="-12"/>
    <ThrusterTickmarksMedium y="-19"/>
    <FrontArrowMedium y="-20" x="-16" />
    <PointerMedium y="-.5" x="158" />
    <ThrusterCenterLineMedium x="78" y="-20"/>
    <rect id="Bar" :x="xValue" y="-12" :width="widthValue" height="24" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
    <ThrusterPowerInputMedium :x="xTarget" y="-20"/>
  </svg>
</template>

<script>
import ThrusterTrackMedium from '../generated-with-style/Thruster/ThrusterTrackMedium.svg'
import ThrusterCenterLineMedium from '../generated-with-style/Thruster/ThrusterCenterLineMedium.svg'
import ThrusterTickmarksMedium from '../generated-with-style/Thruster/ThrusterTickmarksMedium.svg'
import ThrusterPowerInputMedium from '../generated-with-style/Thruster/ThrusterPowerInputMedium.svg'
import ThrusterPowerMedium from '../generated-with-style/Thruster/ThrusterPowerMedium.svg'
import FrontArrowMedium from '../generated-with-style/Thruster/FrontArrowMedium.svg'
import PointerMedium from '../generated-with-style/Thruster/PointerMedium.svg'

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
    PointerMedium
  },
  props: {
    target: {required: true, type: Number},
    value: {required: true, type: Number},
  },
  computed: {
    xTarget: function () {
      return value2width(this.target) + (width/2) - 2;
    },
    xValue: function () {
      if (this.value > 0) {
        return value2width(this.value) + width / 2
      } else {
        return width / 2;
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
