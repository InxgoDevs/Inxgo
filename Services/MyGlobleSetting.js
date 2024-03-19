<<<<<<< HEAD
import React, { useState } from "react";
//import GlobalSettingContext from './GlobalSettingContext'; // Import the context

const MyGlobalSetting = ({ children }) => {
  const [state, setState] = useState({
    url: "https://laravelserver.azurewebsites.net/api",
    svgUrl: "https://laravelserver.azurewebsites.net/svg/",
    // url:'http://127.0.0.1:8000/api',
    // url:'https://192.172.100.145/wizpackapiserver/public/api',
    //save data in client module server
    serverUrl: "https://inxgo.azurewebsites.net/Api",
    // https://www.pacra.com/client/clientmoduleserver/public/api
    //http://127.0.0.1:8000/api
    loaderType: "ball-clip-rotate-multiple",
    imageUrl: "https://inxgo.azurewebsites.net/Clients/Temp/",
    serverImageUrl: "D:/InetPub/vhosts/happijobs.com/inxgo.com/wwwroot",
    reactUrl: "https://www.pacra.com/#/rating/",
    reactServerUrl: "https://www.pacra.com/#/",
    unexpectedError: "Network Error",
  });

  // If you need to update state:
  // const updateState = (newState) => {
  //     setState(prevState => ({ ...prevState, ...newState }));
  // };

  return null; // Replace this with your JSX content
};

export default MyGlobalSetting;
=======
import { Component } from "react";
class MyGlobleSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://laravelserver.azurewebsites.net/api",
      svgUrl: "https://laravelserver.azurewebsites.net/svg/",
      // url:'http://127.0.0.1:8000/api',
      // url:'https://192.172.100.145/wizpackapiserver/public/api',
      //save data in client module server
      serverUrl: "https://inxgo.azurewebsites.net/Api",
      // https://www.pacra.com/client/clientmoduleserver/public/api
      //http://127.0.0.1:8000/api
      loaderType: "ball-clip-rotate-multiple",
      imageUrl: "https://inxgo.azurewebsites.net/Clients/Temp/",
      serverImageUrl: "D:/InetPub/vhosts/happijobs.com/inxgo.com/wwwroot",
      reactUrl: "https://www.pacra.com/#/rating/",
      reactServerUrl: "https://www.pacra.com/#/",
      unexpectedError: "Network Error",
    };
  }
}
export default new MyGlobleSetting();
>>>>>>> 0e5bdf550c6a6b79a3327bd00049e0c8378a0ebc
