<template>
  <div class="weather-widget-wrapper"></div>
</template>

<script>
import moment from "moment";
import api from "@/assets/weather/api";
export default {
  name: "WeatherWidget",
  data() {
    return {};
  },
  created() {
    moment.locale("ko");
    this.apiTestSample();
  },

  methods: {
    /*
    getTMFC() {
    let today = moment();
    let temp = "";

    if (today.hour() + 1 < 6) {
      temp = today.subtract(1, "days").hour(6).minute(0);
    } else if (today.hour() + 1 < 18) {
      temp = today.subtract(1, "days").hour(18).minute(0);
    } else {
      temp = today.hour(6).minute(0);
    }
    console.log(temp.format("yyyyMMDDhhmm"));

    return temp.format("yyyyMMDDhhmm");
  },

  getBaseDate() {
    let today = moment();
    return today.subtract(1, "days").format("yyyyMMDD");
  },

  getBaseTime() {
    let today = moment();
    return today.subtract(1, "days").format("yyyyMMDDhhmm");
  },
    */
    async apiTestSample() {
      // 중기 예보
      api.getMidFcst(10, 1, 108, "202209240600").then((res) => {
        console.log(1, res);
      });

      api.getMidLandFcst(10, 1, "1B00000", "202209240600").then((res) => {
        console.log(2, res);
      });

      api.getMidTa(10, 1, "11B10101", "202209240600").then((res) => {
        console.log(3, res);
      });

      api.getMidSeaFcst(10, 1, "12A20000", "202209240600").then((res) => {
        console.log(4, res);
      });

      // 단기 예보
      api.getUltraSrtNcst(10, 1, "20220923", "0600", 55, 127).then((res) => {
        console.log(5, res);
      });

      api.getUltraSrtFcst(10, 1, "20220923", "0600", 55, 127).then((res) => {
        console.log(6, res);
      });

      api.getVilageFcst(10, 1, "20220923", "0600", 55, 127).then((res) => {
        console.log(7, res);
      });

      api.getFcstVersion(10, 1, "ODAM", "202209230600").then((res) => {
        console.log(8, res);
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
