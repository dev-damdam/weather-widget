<template>
  <div class="weather-widget-wrapper"></div>
</template>

<script>
import api from "@/assets/weather/api";
export default {
  name: "WeatherWidget",
  data() {
    return {};
  },
  created() {
    this.apiTestSample();
  },

  methods: {
    async apiTestSample() {
      api.getMidFcst().then((res) => {
        console.log(res);
      });

      api.getMidLandFcst().then((res) => {
        console.log(res);
      });

      api.getMidTa().then((res) => {
        console.log(res);
      });

      api.getMidSeaFcst().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather-widget-wrapper {
  width: 100%;
}
</style>
