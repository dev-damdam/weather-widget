<template>
  <div class="weather-view-wrapper">
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget.vue";

export default {
  name: "HomeView",
  components: {
    WeatherWidget,
  },
};
</script>
<style lang="scss" scoped>
.weather-view-wrapper {
  width: 100%;
}
</style>
