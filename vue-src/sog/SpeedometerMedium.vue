<template>
  <svg viewBox="-128 -128 256 256">
    <watch-face-medium x="-128.5" y="-128.5" width="257" height="257"/>
    <g :transform="rotate">
      <speed-needle-medium x="-12" y="-128" width="24" height="256"/>
    </g>
  </svg>
</template>

<script>

import WatchFaceMedium from "../../generated-with-style/SOG_STW/WatchFaceMedium.svg";
import SpeedNeedleMedium from "../../generated-with-style/SOG_STW/SpeedNeedleMedium.svg";

export default {
  name: "SpeedometerMedium",
  props: {
    value: {required: true, type: Number}
  },
  components: {
    WatchFaceMedium,
    SpeedNeedleMedium
  },
  computed: {
    rotate: function () {
      return `rotate(${this.value * 90 / 10 - 90})`
    }
  }
}
</script>

<style scoped>

</style>
