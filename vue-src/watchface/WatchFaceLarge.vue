<template>
  <svg viewBox="-256 -256 512 512">
    <g :transform="transform">
      <g mask="url(#clipPathWatchFaceLarge)">
        <inner-circle-regular-large v-if="innerCircle==='regular'" width="512" heigh="512" x="-256"
                                     y="-256"/>
        <inner-circle-port-starboard-large v-if="innerCircle==='portStarboard'" width="512"
                                            heigh="512" x="-256" y="-256"/>
        <inner-circle-positive-negative-large v-if="innerCircle==='positiveNegative'" width="512"
                                               heigh="512" x="-256"
                                               y="-256"/>
        <tertiary-tickmarks-large width="512" heigh="512"
                                      x="-256"
                                      y="-256"/>
        <secondary-tickmarks5-large v-if="secondaryTickmarks===5" width="512" heigh="512" x="-256"
                                     y="-256"/>
        <secondary-tickmarks9-large v-if="secondaryTickmarks===9" width="512" heigh="512" x="-256"
                                     y="-256"/>
        <secondary-tickmarks10-large v-if="secondaryTickmarks===10" width="512" heigh="512"
                                      x="-256"
                                      y="-256"/>

        <cross-regular-large v-if="cross" width="512" heigh="512" x="-256" y="-256"/>
      </g>
      <primary-ticks-large :rotate="rotate" :show-labels="showLabels"
                            :show-deg="primaryTickmarks"
                            :start-clip-deg="startClipDegMapped"
                            :end-clip-deg="endClipDegMapped"
                                width="725" heigh="725" x="-362.5"
                                y="-362.5"/>
    </g>

    <mask id="clipPathWatchFaceLarge">
      <rect height="512" width="512" x="-256" y="-256" fill="white"></rect>
      <path :d='clipPath' fill="black"/>
    </mask>
  </svg>

</template>

<script>
import SecondaryTickmarks5Large
  from '../../generated-with-style/WatchFace/SecondaryTickmarks5Large.svg'
import SecondaryTickmarks9Large
  from '../../generated-with-style/WatchFace/SecondaryTickmarks9Large.svg'
import SecondaryTickmarks10Large
  from '../../generated-with-style/WatchFace/SecondaryTickmarks10Large.svg'
import TertiaryTickmarksLarge
  from '../../generated-with-style/WatchFace/TertiaryTickmarksLarge.svg'
import InnerCircleRegularLarge
  from '../../generated-with-style/WatchFace/InnerCircleRegularLarge.svg'
import InnerCirclePortStarboardLarge
  from '../../generated-with-style/WatchFace/InnerCirclePortStarboardLarge.svg'
import InnerCirclePositiveNegativeLarge
  from '../../generated-with-style/WatchFace/InnerCirclePositiveNegativeLarge.svg'
import CrossRegularLarge from '../../generated-with-style/WatchFace/CrossRegularLarge.svg'
import PrimaryTicksLarge from "./primary-tickmarks/PrimaryTicksLarge";


export default {
  name: "WatchFaceLarge",
  props: {
    /**
     * Primary tick marks
     * @values 30, 45, 90, undefined
     */
    primaryTickmarks: {required: false, type: Number},
    /**
     * Secondary tick marks
     * @values 5,9,10, undefined
     */
    secondaryTickmarks: {required: false, type: Number},
    /**
     * Inner circle
     * @values regular, portStarboard, positiveNegative
     */
    innerCircle: {required: false, type: String},
    /**
     * Inner cross
     */
    cross: {required: false, type: Boolean, default: false},
    rotate: {required: false, type: Number, default: 0},
    showLabels: {required: false, type: Boolean, default: true},
    startClipDeg: {required: false, type: Number, default: 0},
    endClipDeg: {required: false, type: Number, default: 0}
  },
  components: {
    PrimaryTicksLarge,
    SecondaryTickmarks5Large,
    SecondaryTickmarks9Large,
    SecondaryTickmarks10Large,
    TertiaryTickmarksLarge,
    InnerCircleRegularLarge,
    InnerCirclePortStarboardLarge,
    InnerCirclePositiveNegativeLarge,
    CrossRegularLarge
  },
  computed: {
    transform: function () {
      return `rotate(${this.rotate})`;
    },
    startClipDegMapped: function () {
      const deg = this.startClipDeg % 360
      if (deg < 0)
        return deg + 360;
      else
        return deg
    },
    endClipDegMapped: function () {
      let deg = this.endClipDeg % 360
      while (deg < this.startClipDegMapped) {
        deg += 360
      }
      return deg
    },
    clipPath: function () {
      const radius = 256;
      let startClipRad = this.startClipDegMapped / 180 * Math.PI;
      let endClipRad = this.endClipDegMapped / 180 * Math.PI;
      const x0 = radius * Math.sin(startClipRad);
      const y0 = -radius * Math.cos(startClipRad);
      const x1 = radius * Math.sin(endClipRad);
      const y1 = -radius * Math.cos(endClipRad);
      const largeArcFlag = (endClipRad - startClipRad) <= Math.PI ? 0 : 1;
      return `M0 0 ${x0} ${y0} A${radius} ${radius} 0 ${largeArcFlag} 1 ${x1} ${y1}Z`
    }
  }
}
</script>

<style scoped>

</style>
