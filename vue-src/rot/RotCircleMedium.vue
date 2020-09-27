<template>
  <svg viewBox="-128 -128 256 256">
    <RotCircleMediumRaw x="-104" y="-104" width="208" height="208" :angle="angle"/>
  </svg>

</template>

<script>
import RotCircleMediumRaw from '../../gen-vue/RotCircleMediumRaw'

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
    RotCircleMediumRaw
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
  }
}
</script>

<style scoped>

</style>
