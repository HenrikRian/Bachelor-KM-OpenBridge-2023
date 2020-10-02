<template>
  <svg viewBox="-128 -128 256 256">
    <WatchFaceMedium x="-128" y="-128"
                     :rotate="watchFaceAngle"
                     :cross="true"
                     inner-circle="regular"
                     :primary-tickmarks="45"
                     :secondary-tickmarks="5"/>
    <g :transform="rotate">
      <heading-medium x="-16" y="-128" width="32" height="256"/>
    </g>
  </svg>

</template>

<script>
import WatchFaceMedium from "../watchface/WatchFaceMedium";
import HeadingMedium from "../../generated-without-style/HDG_COG/HeadingMedium.svg";

export default {
  name: "HdgMedium",
  props: {
    heading: {required: true, type: Number},
    northUp: {required: true, type: Boolean}
  },
  components: {
    WatchFaceMedium,
    HeadingMedium
  },
  computed: {
    watchFaceAngle() {
      return this.northUp ? 0 : -this.heading;
    },
    rotate() {
      const angle = this.northUp ? this.heading : 0;
      return `rotate(${angle} 0 0)`
    }
  }

}
</script>

<style scoped>

</style>
