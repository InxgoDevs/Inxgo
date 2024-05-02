import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Regular } from "../constants/fonts";

const appStyle = StyleSheet.create({
  appButtonContainer: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FFC44D",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  inputSearch: {
    width: responsiveWidth(90),
    backgroundColor: "#D9D9D9",
    opacity: 0.4,
    borderRadius: 15,
    paddingHorizontal: 10,
    height: responsiveHeight(7.5),

    color: "black",
    //  flex: 1, // Take up the remaining space in the container

    zIndex: 0, // Ensure border has z-index of 0
  },
  countrySearch: {
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 0, // Ensure border has z-index of 0
  },
  arrow_back: {
    top: 6,
    marginLeft: 15,
  },
  welcome: {
    //marginTop:50,
    fontSize: 20,
    //marginLeft:20,
    flexDirection: "row",
    // alignSelf: "center",
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:"orange",
    height: responsiveHeight(8),
  },
  welcomeText: {
    fontWeight: "500",
    fontSize: 20,
    // marginBottom:20,
    marginLeft: 20,
    fontFamily:Regular
    
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    width: 110,
    borderRadius: 65,
  },
  aboutimage: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    borderRadius: 65,
  },
});
export default appStyle;
