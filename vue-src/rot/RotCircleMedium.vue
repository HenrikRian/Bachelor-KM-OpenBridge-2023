<template>
  <svg viewBox="-128 -128 256 256">
    <CircleTrackMedium x="-104" y="-104" width="208" height="208"/>
    <CircleBorderInsideMedium x="-88" y="-88" width="176" height="176"/>
    <CircleBorderOutsideMedium x="-104" y="-104" width="208" height="208"/>
    <g :transform="rotate">
      <circle-dots-medium x="-100" y="-100" width="200" height="200"/>
    </g>
  </svg>

</template>

<script>
import CircleDotsMedium from '../../generated-without-style/ROT/CircleDotsMedium.svg'
import CircleBorderInsideMedium
  from '../../generated-without-style/ROT/CircleBorderInsideMedium.svg'
import CircleBorderOutsideMedium
  from '../../generated-without-style/ROT/CircleBorderOutsideMedium.svg'
import CircleTrackMedium from '../../generated-with-style/ROT/CircleTrackMedium.svg'

export default {
  name: "RotCircleMedium",
  props: {
    value: {required: true, type: Number}
  },
  data: function () {
    return {
      angle: 0,
      intervalHandler: null
    }
  },
  components: {
    CircleDotsMedium, CircleBorderInsideMedium, CircleBorderOutsideMedium, CircleTrackMedium
  },
  mounted() {
    const dt = 1000 / 60;
    this.intervalHandler = setInterval(() => {
      this.angle += this.value * dt / 1000;
    }, dt);
  },
  beforeDestroy() {
    if (this.intervalHandler !== null) {
      clearInterval(this.intervalHandler);
      this.intervalHandler = null;
    }
  },
  computed: {
    rotate() {
      return `rotate(${this.angle})`
    }
  }
}
</script>

<style scoped>

</style>
