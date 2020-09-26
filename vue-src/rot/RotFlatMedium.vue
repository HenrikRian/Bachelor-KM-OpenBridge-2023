<template>
  <svg viewBox="-128 0 256 56">
    <tic-bar-medium x="-128" y="0" width="256" height="32"/>
    <flat-arrow-hdg-medium :x="x" y="24" width="24" height="32"/>
  </svg>

</template>

<script>
import TicBarMedium from '../../generated-with-style/ROT/TicBarMedium.svg'
import FlatArrowHdgMedium from '../../generated-with-style/HDG_COG/FlatArrowHdgMedium.svg'

export default {
  name: "RotFlatMedium",
  props: {
    value: {required: true, type: Number}
  },
  components: {
    TicBarMedium,
    FlatArrowHdgMedium
  },
  computed: {
    x: function () {
      const scale = 224/2;
      const iconWidth = 24;
      const range = 40;
      return this.value / range * scale - iconWidth / 2;
    }
  }
}
</script>

<style scoped>

</style>
