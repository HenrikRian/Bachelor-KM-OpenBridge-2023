<template>
  <speedometer-medium-raw :angle="angle"/>
</template>

<script>

import SpeedometerMediumRaw from "../../gen-vue/SpeedometerMediumRaw";

export default {
  name: "SpeedometerMedium",
  props: {
    value: {required: true, type: Number}
  },
  components: {
    SpeedometerMediumRaw
  },
  computed: {
    angle: function (){
      return this.value * 90 /10 - 90
    }
  }
}
</script>

<style scoped>

</style>
