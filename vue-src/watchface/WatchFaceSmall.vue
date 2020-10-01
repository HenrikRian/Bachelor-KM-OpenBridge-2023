<template>
  <svg viewBox="-32 -32 64 64">
    <g :transform="transform">
      <g mask="url(#clipPathWatchFaceSmall)">
        <inner-circle-regular-small v-if="innerCircle==='regular'" width="64" heigh="64" x="-32"
                                    y="-32"/>
        <inner-circle-port-starboard-small v-if="innerCircle==='portStarboard'" width="64"
                                           heigh="64" x="-32" y="-32"/>
        <inner-circle-positive-negative-small v-if="innerCircle==='positiveNegative'" width="64"
                                              heigh="64" x="-32"
                                              y="-32"/>
        <cross-regular-small v-if="cross" width="56" heigh="56" x="-28" y="-28"/>
      </g>
      <primary-ticks-small :rotate="rotate" :show-pointer="showPointer"
                           :show-deg="primaryTickmarks"
                           :start-clip-deg="startClipDegMapped"
                           :end-clip-deg="endClipDegMapped"
                           width="91" heigh="91" x="-45.5"
                           y="-45.5"/>
    </g>

    <mask id="clipPathWatchFaceSmall">
      <rect height="128" width="128" x="-64" y="-64" fill="white"></rect>
      <path :d='clipPath' fill="black"/>
    </mask>
  </svg>

</template>

<script>
import InnerCircleRegularSmall
  from '../../generated-with-style/WatchFace/InnerCircleRegularSmall.svg'
import InnerCirclePortStarboardSmall
  from '../../generated-with-style/WatchFace/InnerCirclePortStarboardSmall.svg'
import InnerCirclePositiveNegativeSmall
  from '../../generated-with-style/WatchFace/InnerCirclePositiveNegativeSmall.svg'
import CrossRegularSmall from '../../generated-with-style/WatchFace/CrossRegularSmall.svg'
import PrimaryTicksSmall from "./primary-tickmarks/PrimaryTicksSmall";


export default {
  name: "WatchFaceSmall",
  props: {
    /**
     * Primary tick marks
     * @values 30, 45, 90, undefined
     */
    primaryTickmarks: {required: false, type: Number},
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
    showPointer: {required: false, type: Boolean, default: true},
    startClipDeg: {required: false, type: Number, default: 0},
    endClipDeg: {required: false, type: Number, default: 0}
  },
  components: {
    PrimaryTicksSmall,
    InnerCircleRegularSmall,
    InnerCirclePortStarboardSmall,
    InnerCirclePositiveNegativeSmall,
    CrossRegularSmall
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
      const radius = 40;
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
