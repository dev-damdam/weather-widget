import axios from "axios";
import key from "./keys";
import utils from "../utils";

const MIDFCSTINFOSERVICEURL =
  "https://apis.data.go.kr/1360000/MidFcstInfoService/";

const api = {
  /*
  getMidFcst() : 중기전망조회
  description : 지점번호, 발표시각의 조회조건으로 기상전망정보를 조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  stnId(지점번호) : 108 전국, 109 서울, 인천, 경기도 등
  tmFc(발표시각) : 일 2회(06:00,18:00)회 생성 되며 발표시각을 입력, 최근 24시간 자료만 제공
  */
  getMidFcst() {
    const tmFC = utils.getTMFC();
    let url = `${MIDFCSTINFOSERVICEURL}getMidFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=10&pageNo=1&dataType=JSON&stnId=108&tmFc=${tmFC}`;

    return axios.get(url);
  },

  /*
  getMidLandFcst() : 중기육상예보조회
  description : 예보구역코드, 발표시각의 조회 조건으로 예보일로부터 3일에서 10일까지 육상날씨정보를 조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  regId(예보구역코드) : 1B00000 서울, 인천, 경기도, 11D10000 등
  tmFc(발표시각) : 일 2회(06:00,18:00)회 생성 되며 발표시각을 입력, 최근 24시간 자료만 제공
  */
  getMidLandFcst() {
    const tmFC = utils.getTMFC();
    let url = `${MIDFCSTINFOSERVICEURL}getMidLandFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=10&pageNo=1&dataType=JSON&regId=11B00000&tmFc=${tmFC}`;

    return axios.get(url);
  },

  /*
  getMidTa() : 중기기온조회
  description : 예보구역코드, 발표시각의 조회 조건으로 예보일로부터 3일에서 10일까지 최저/최고기온정보를  조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  regId(예보구역코드) : 11B10101, 서울, 11B20201, 인천…등
  tmFc(발표시각) : 일 2회(06:00,18:00)회 생성 되며 발표시각을 입력, 최근 24시간 자료만 제공
  */
  getMidTa() {
    const tmFC = utils.getTMFC();
    let url = `${MIDFCSTINFOSERVICEURL}getMidTa?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=10&pageNo=1&dataType=JSON&regId=11B10101&tmFc=${tmFC}`;

    return axios.get(url);
  },

  /*
  getMidSeaFcst() : 중기해상예보조회
  description : 예보구역코드, 발표시각의 조회 조건으로 예보일로부터 3일에서 10일까지 최저/최고기온정보를  조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  regId(예보구역코드) : 12A20000 서해중부, 12B10000 남해서부…등
  tmFc(발표시각) : 일 2회(06:00,18:00)회 생성 되며 발표시각을 입력, 최근 24시간 자료만 제공
  */
  getMidSeaFcst() {
    const tmFC = utils.getTMFC();
    let url = `${MIDFCSTINFOSERVICEURL}getMidSeaFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=10&pageNo=1&dataType=JSON&regId=12A20000&tmFc=${tmFC}`;

    return axios.get(url);
  },
};
export default api;
