import axios from "axios";
import moment from "moment";
import key from "./keys";

moment.locale("ko");

const MIDFCSTINFOSERVICEURL =
  "https://apis.data.go.kr/1360000/MidFcstInfoService/";

const api = {
  getMidFcst() {
    let today = moment();
    let tmFC = "";
    let temp = "";

    if (today.hour() + 1 < 6) {
      temp = today.subtract(1, "days").hour(6).minute(0);
    } else if (today.hour() + 1 < 18) {
      temp = today.subtract(1, "days").hour(18).minute(0);
    } else {
      temp = today.hour(6).minute(0);
    }

    tmFC = temp.format("yyyyMMDDhhmm");
    let url = `${MIDFCSTINFOSERVICEURL}getMidFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=10&pageNo=1&dataType=JSON&stnId=108&tmFc=${tmFC}`;

    return axios.get(url);
  },
};
export default api;
