<template>
  <svg viewBox="-32 -32 64 64">
    <WatchFaceSmall x="-32" y="-32"
                     :rotate="watchFaceAngle"
                     :cross="true"
                     inner-circle="regular"
                     :primary-tickmarks="45"/>
    <g :transform="rotate">
      <heading-small x="-8" y="-32" width="16" height="64"/>
    </g>
  </svg>

</template>

<script>
import WatchFaceSmall from "../watchface/WatchFaceSmall";
import HeadingSmall from "../../generated-without-style/HDG_COG/HeadingSmall.svg";

export default {
  name: "HdgSmall",
  props: {
    heading: {required: true, type: Number},
    northUp: {required: true, type: Boolean}
  },
  components: {
    WatchFaceSmall,
    HeadingSmall
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
