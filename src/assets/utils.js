import moment from "moment";

moment.locale("ko");

const utils = {
  getDate(date, format) {
    return date.format(format);
  },
};

export default utils;
