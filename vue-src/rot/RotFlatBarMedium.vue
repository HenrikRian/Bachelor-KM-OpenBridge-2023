<template>
  <svg viewBox="-128 0 256 56">
    <tic-bar-medium x="-128" y="0" width="256" height="32"/>
    <rect id="bar" y="28" :x="Math.min(xMark, 0)" :width="Math.abs(xMark)" height="4" fill="#0080FF"
          class="ob-instrument-dynamic-color-fill"/>
    <rect id="mark" y="24" :x="xMark" width="1" height="8" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
  </svg>

</template>

<script>
import TicBarMedium from '../../generated-with-style/ROT/TicBarMedium.svg'

export default {
  name: "RotFlatBarMedium",
  props: {
    value: {required: true, type: Number}
  },
  components: {
    TicBarMedium
  },
  computed: {
    xMark: function () {
      const scale = 112;
      const range = 40;
      return (this.value / range) * scale - .5;
    }
  }
}
</script>

<style scoped>

</style>
