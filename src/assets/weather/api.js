import axios from "axios";
import key from "./keys";

const MIDFCSTINFOSERVICEURL =
  "https://apis.data.go.kr/1360000/MidFcstInfoService";

const VILAGEFCSTINFOSERVICEURL =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

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
  getMidFcst(numOfRows, pageNo, stnId, tmFC) {
    let url = `${MIDFCSTINFOSERVICEURL}/getMidFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&stnId=${stnId}&tmFc=${tmFC}`;
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
  getMidLandFcst(numOfRows, pageNo, regId, tmFC) {
    let url = `${MIDFCSTINFOSERVICEURL}/getMidLandFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&regId=${regId}&tmFc=${tmFC}`;
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
  getMidTa(numOfRows, pageNo, regId, tmFC) {
    let url = `${MIDFCSTINFOSERVICEURL}/getMidTa?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&regId=${regId}&tmFc=${tmFC}`;

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
  getMidSeaFcst(numOfRows, pageNo, regId, tmFC) {
    let url = `${MIDFCSTINFOSERVICEURL}/getMidSeaFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&regId=${regId}&tmFc=${tmFC}`;

    return axios.get(url);
  },

  /*
  getUltraSrtNcst() : 초단기실황조회
  description : 실황정보를 조회하기 위해 발표일자, 발표시각, 예보지점 X 좌표, 예보지점 Y 좌표의 조회 조건으로 자료구분코드, 실황값, 발표일자, 발표시각, 예보지점 X 좌표, 예보지점 Y 좌표의 정보를 조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  base_date(발표일자) : 발표일자, ex) 20210628 -> 21년 6월 28일 발표
  base_time(발표시각) : 06시 발표(정시단위), 매시각 40분 이후 호출
  nx(예보지점 X 좌표) : 예보지점의 X 좌표값
  ny(예보지점 Y 좌표) : 예보지점의 Y 좌표값
  */
  getUltraSrtNcst(numOfRows, pageNo, base_date, base_time, nx, ny) {
    let url = `${VILAGEFCSTINFOSERVICEURL}/getUltraSrtNcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

    return axios.get(url);
  },

  /*
  getUltraSrtFcst() : 초단기예보조회
  description : 초단기예보정보를 조회하기 위해 발표일자, 발표시각, 예보지점 X 좌표, 예보지점 Y 좌표의 조회 조건으로 자료구분코드, 예보값, 발표일자, 발표시각, 예보지점 X 좌표, 예보지점 Y 좌표의 정보를 조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  base_date(발표일자, 필수) : 발표일자, ex) 20210628 -> 21년 6월 28일 발표
  base_time(발표시각, 필수) : 06시30분 발표(30분 단위), 매시각 45분 이후 호출
  nx(예보지점 X 좌표, 필수) : 예보지점의 X 좌표값
  ny(예보지점 Y 좌표, 필수) : 예보지점의 Y 좌표값
  */
  getUltraSrtFcst(numOfRows, pageNo, base_date, base_time, nx, ny) {
    let url = `${VILAGEFCSTINFOSERVICEURL}/getUltraSrtFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

    return axios.get(url);
  },

  /*
  getVilageFcst() : 단기예보조회
  description : 단기예보 정보를 조회하기 위해 발표일자, 발표시각, 예보지점 X좌표, 예보지점 Y 좌표의 조회 조건으로 발표일자, 발표시각, 자료구분문자, 예보 값, 예보일자, 예보시각, 예보지점 X 좌표, 예보지점 Y 좌표의 정보를 조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  base_date(발표일자) : 발표일자, ex) 20210628 -> 21년 6월 28일 발표
  base_time(발표시각) : 매시각 40분 이후 호출
  nx(예보지점 X 좌표) : 예보지점의 X 좌표값
  ny(예보지점 Y 좌표) : 예보지점의 Y 좌표값
  */
  getVilageFcst(numOfRows, pageNo, base_date, base_time, nx, ny) {
    let url = `${VILAGEFCSTINFOSERVICEURL}/getVilageFcst?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

    return axios.get(url);
  },

  /*
  getFcstVersion() : 예보버전조회
  description : 단기예보정보조회서비스 각각의 오퍼레이션(초단기실황, 초단기예보, 단기예보)들의 수정된 예보 버전을 파악하기 위해 예보버전을 조회하는 기능
  serviceKey(인증키) : 공공데이터포털에서 발급받은 인증키
  numOfRows(한 페이지 결과 수) : 한 페이지 결과 수, Default: 10
  pageNo(페이지 번호) : 페이지 번호, Default: 1
  dataType(응답자료형식) : 요청자료형식(XML/JSON), Default: XML
  ftype(파일구분) : ODAM: 초단기실황, VSRT: 초단기예보, SHRT: 단기예보
  basedatetime(발표시각) : 각각의 base_time 로 검색
  */
  getFcstVersion(numOfRows, pageNo, ftype, basedatetime) {
    let url = `${VILAGEFCSTINFOSERVICEURL}/getFcstVersion?serviceKey=${key.midFcstInfoServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=JSON&ftype=${ftype}&basedatetime=${basedatetime}`;

    return axios.get(url);
  },
};
export default api;
