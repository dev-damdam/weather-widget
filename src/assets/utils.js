import moment from "moment";

moment.locale("ko");

const utils = {
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
    return temp.format("yyyyMMDDhhmm");
  },
};

export default utils;
