<template>
  <svg viewBox="-128 -128 256 256">
    <g :transform="transform">
      <g mask="url(#clipPathWatchFaceMedium)">
        <inner-circle-regular-medium v-if="innerCircle==='regular'" width="256" heigh="256" x="-128"
                                     y="-128"/>
        <inner-circle-port-starboard-medium v-if="innerCircle==='portStarboard'" width="256"
                                            heigh="256" x="-128" y="-128"/>
        <inner-circle-positive-negative-medium v-if="innerCircle==='positiveNegative'" width="256"
                                               heigh="256" x="-128"
                                               y="-128"/>
        <secondary-tickmarks5-medium v-if="secondaryTickmarks===5" width="256" heigh="256" x="-128"
                                     y="-128"/>
        <secondary-tickmarks9-medium v-if="secondaryTickmarks===9" width="256" heigh="256" x="-128"
                                     y="-128"/>
        <secondary-tickmarks10-medium v-if="secondaryTickmarks===10" width="256" heigh="256"
                                      x="-128"
                                      y="-128"/>
        <cross-regular-medium v-if="cross" width="256" heigh="256" x="-128" y="-128"/>
      </g>
      <primary-ticks-medium :rotate="rotate" :show-labels="showLabels"
                            :show-deg="primaryTickmarks"
                            :start-clip-deg="startClipDegMapped"
                            :end-clip-deg="endClipDegMapped"
                                width="363" heigh="363" x="-181.5"
                                y="-181.5"/>
    </g>

    <mask id="clipPathWatchFaceMedium">
      <rect height="256" width="256" x="-128" y="-128" fill="white"></rect>
      <path :d='clipPath' fill="black"/>
    </mask>
  </svg>

</template>

<script>
import SecondaryTickmarks5Medium
  from '../../generated-with-style/WatchFace/SecondaryTickmarks5Medium.svg'
import SecondaryTickmarks9Medium
  from '../../generated-with-style/WatchFace/SecondaryTickmarks9Medium.svg'
import SecondaryTickmarks10Medium
  from '../../generated-with-style/WatchFace/SecondaryTickmarks10Medium.svg'
import InnerCircleRegularMedium
  from '../../generated-with-style/WatchFace/InnerCircleRegularMedium.svg'
import InnerCirclePortStarboardMedium
  from '../../generated-with-style/WatchFace/InnerCirclePortStarboardMedium.svg'
import InnerCirclePositiveNegativeMedium
  from '../../generated-with-style/WatchFace/InnerCirclePositiveNegativeMedium.svg'
import CrossRegularMedium from '../../generated-with-style/WatchFace/CrossRegularMedium.svg'
import PrimaryTicksMedium from "./primary-tickmarks/PrimaryTicksMedium";


export default {
  name: "WatchFaceMedium",
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
    PrimaryTicksMedium,
    SecondaryTickmarks5Medium,
    SecondaryTickmarks9Medium,
    SecondaryTickmarks10Medium,
    InnerCircleRegularMedium,
    InnerCirclePortStarboardMedium,
    InnerCirclePositiveNegativeMedium,
    CrossRegularMedium
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
      const radius = 128;
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
