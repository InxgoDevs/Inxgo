import MyGlobleSetting from "./MyGlobleSetting";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const base_url = MyGlobleSetting.state.url;
// const base_url_MSQL = MyGlobleSetting.state.serverUrl;
const base_url = MyGlobleSetting.state ? MyGlobleSetting.state.url : 'fallback_url';
const base_url_MSQL = MyGlobleSetting.state ? MyGlobleSetting.state.serverUrl : 'fallback_server_url';


var ApiCall = {
  async getAPICall(flag, url) {
    let temp_url = flag == 1 ? base_url : base_url_MSQL;
    var content_type = "application/json";
    if (flag == 1) {
      var token = await AsyncStorage.getItem("token");
      if (typeof token != "undefined") {
        token = JSON.parse(token);
      }
      //content_type='application/json';
      content_type = "application/x-www-form-urlencoded;token=" + token;
      var headers = {
        "Content-Type": content_type,
      };
    } else {
      var token = await AsyncStorage.getItem("Bearertoken");
      token = JSON.parse(token);
      content_type = "application/json";
      var headers = {
        "Content-Type": content_type,
        Authorization: token,
      };
    }
    // crossorigin: false,
    // mode: 'no-cors',
    try {
      let response = await fetch(temp_url + "/" + url, {
        method: "GET",
        headers: new Headers(headers),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  },

  async postAPICall(flag, url, data, Content_Type = "application/json") {
    var content_type = "application/json";
    if (flag == 1) {
      var token = await AsyncStorage.getItem("token");
      console.log(token);
      if (typeof token != "undefined") {
        token = JSON.parse(token);
      }
      content_type = "application/x-www-form-urlencoded;token=" + token;
      // content_type='application/json';
      var headers = {
        "Content-Type": content_type,
      };
    } else {
      var token = await AsyncStorage.getItem("Bearertoken");
      token = JSON.parse(token);
      content_type = "application/json";
      var headers = {
        "Content-Type": content_type,
        Authorization: token,
      };
    }
    let temp_url = flag == 1 ? base_url : base_url_MSQL;
    try {
      let response = await fetch(temp_url + "/" + url, {
        method: "POST",
        headers: new Headers(headers),
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  },
};

export default ApiCall;
