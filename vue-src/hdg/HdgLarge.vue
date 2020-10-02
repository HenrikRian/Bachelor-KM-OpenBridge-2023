<template>
  <svg viewBox="-256 -256 512 512">
    <WatchFaceLarge x="-256" y="-256"
                     :rotate="watchFaceAngle"
                     :cross="true"
                     inner-circle="regular"
                     :primary-tickmarks="45"
                     :secondary-tickmarks="5"/>
    <g :transform="rotateCog">
      <cog-large x="-32" y="-256" width="64" height="512"/>
    </g>
    <g :transform="rotate">
      <heading-large x="-32" y="-256" width="64" height="512"/>
    </g>
  </svg>

</template>

<script>
import WatchFaceLarge from "../watchface/WatchFaceLarge";
import HeadingLarge from "../../generated-without-style/HDG_COG/HeadingLarge.svg";
import CogLarge from "../../generated-with-style/HDG_COG/CogLarge.svg";

export default {
  name: "HdgLarge",
  props: {
    heading: {required: true, type: Number},
    northUp: {required: true, type: Boolean},
    /** Course over ground */
    cog: {required: true, type: Number}
  },
  components: {
    WatchFaceLarge,
    HeadingLarge,
    CogLarge
  },
  computed: {
    watchFaceAngle() {
      return this.northUp ? 0 : -this.heading;
    },
    rotate() {
      const angle = this.northUp ? this.heading : 0;
      return `rotate(${angle} 0 0)`
    },
    rotateCog() {
      const angle = this.northUp ? this.cog : this.cog - this.heading;
      return `rotate(${angle} 0 0)`
    }
  }

}
</script>

<style scoped>

</style>
