<template>
  <svg viewBox="-128 -128 256 256">
    <inner-circle-regular-medium v-if="innerCircle==='regular'" width="256" heigh="256" x="-128" y="-128"/>
    <inner-circle-port-starboard-medium v-if="innerCircle==='portStarboard'" width="256" heigh="256" x="-128" y="-128"/>
    <inner-circle-positive-negative-medium v-if="innerCircle==='positiveNegative'" width="256" heigh="256" x="-128"
                                           y="-128"/>
    <secondary-tickmarks5-medium v-if="secondaryTickmarks===5" width="256" heigh="256" x="-128" y="-128"/>
    <secondary-tickmarks9-medium v-if="secondaryTickmarks===9" width="256" heigh="256" x="-128" y="-128"/>
    <secondary-tickmarks10-medium v-if="secondaryTickmarks===10" width="256" heigh="256" x="-128" y="-128"/>
    <primary-tickmarks30-medium v-if="primaryTickmarks===30" width="285" heigh="285" x="-148.5" y="-148.5"/>
    <primary-tickmarks45-medium v-if="primaryTickmarks===45" width="363" heigh="363" x="-181.5" y="-181.5"/>
    <primary-tickmarks90-medium v-if="primaryTickmarks===90" width="256" heigh="256" x="-128" y="-128"/>
    <cross-regular-medium v-if="cross" width="256" heigh="256" x="-128" y="-128"/>
  </svg>

</template>

<script>
import PrimaryTickmarks30Medium from '../../generated-with-style/WatchFace/PrimaryTickmarks30Medium.svg'
import PrimaryTickmarks45Medium from '../../generated-with-style/WatchFace/PrimaryTickmarks45Medium.svg'
import PrimaryTickmarks90Medium from '../../generated-with-style/WatchFace/PrimaryTickmarks90Medium.svg'
import SecondaryTickmarks5Medium from '../../generated-with-style/WatchFace/SecondaryTickmarks5Medium.svg'
import SecondaryTickmarks9Medium from '../../generated-with-style/WatchFace/SecondaryTickmarks9Medium.svg'
import SecondaryTickmarks10Medium from '../../generated-with-style/WatchFace/SecondaryTickmarks10Medium.svg'
import InnerCircleRegularMedium from '../../generated-with-style/WatchFace/InnerCircleRegularMedium.svg'
import InnerCirclePortStarboardMedium from '../../generated-with-style/WatchFace/InnerCirclePortStarboardMedium.svg'
import InnerCirclePositiveNegativeMedium
  from '../../generated-with-style/WatchFace/InnerCirclePositiveNegativeMedium.svg'
import CrossRegularMedium from '../../generated-with-style/WatchFace/CrossRegularMedium.svg'


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
    cross: {required: false, type: Boolean, default: false}
  },
  components: {
    PrimaryTickmarks30Medium,
    PrimaryTickmarks45Medium,
    PrimaryTickmarks90Medium,
    SecondaryTickmarks5Medium,
    SecondaryTickmarks9Medium,
    SecondaryTickmarks10Medium,
    InnerCircleRegularMedium,
    InnerCirclePortStarboardMedium,
    InnerCirclePositiveNegativeMedium,
    CrossRegularMedium
  }
}
</script>

<style scoped>

</style>
