<template>
  <div id="app">
    <ob-rot-circle-large class="large-component" :rateOfTurn="rateOfTurn" />
    <ob-hdg-large class="large-component"
                  :heading="10"
                  :showSetPoint="false"
                  :showCourseOverGround="true"
                  :courseOverGround="5"
    />
  </div>
</template>

<script lang="ts">
import "openbridge-web-components";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  rateOfTurn = 10;

  mounted(): void {
    setInterval(() => {
      const t = new Date().getTime();
      this.rateOfTurn = 100 * Math.sin(t / 1000);
    }, 100);
  }
}
</script>

<style>
#app {
  background-color: var(--container-background-color);
}

.large-component {
  width: 512px;
  height: 512px;
}
</style>
