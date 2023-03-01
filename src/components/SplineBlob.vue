<script>
import { defineComponent } from 'vue';
import Spline from "spline-vue/v3";
export default defineComponent({
  name: "SplineBlob",
  components: {
    Spline
  },
  data: () => ({
    scene: "https://prod.spline.design/GUuwxinLnSRGTm5v/scene.splinecode",
  })
});
</script>

<template>
  <Spline :scene="scene" />
</template>

<style scoped>

</style>
