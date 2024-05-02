import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Regular, Bold } from "../constants/fonts";

const appStyle = StyleSheet.create({
  leftContainerPromotion: {
    width: "65%",
    top: 10,
  },
  welcome: {
    marginTop: verticalScale(40),
    fontSize: 40,

    fontFamily: Bold,
    //alignSelf: "center",
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    fontWeight: "600",
    marginBottom: 20,
    marginLeft: 25,
  },
  welcomeF: {
    fontSize: 20,
    fontWeight: "700",
    //left:10,
    //marginBottom:20,
    fontFamily:Regular
  },
  appButtonSoical: {
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
    // borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    height: 57,
    justifyContent: "center",
    fontFamily:Regular
  },
  lineText: {
    alignSelf: "center",
    //top: 15,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: Regular,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "space-between",
    //backgroundColor:'green',
    // alignItems:'center',
    flexDirection: "row",
    width: "100%",
  },
  appButtonSoical: {
    width: "30%",

    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#E8ECF1",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // marginTop:5,
    marginLeft: 5,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default appStyle;