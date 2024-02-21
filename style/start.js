
import { StyleSheet } from "react-native";

const appStyle =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // height:1000,
    // marginTop:100,
    justifyContent: 'center',
  },
   appButtonContainer: {
        width:134,
        alignSelf: 'center',
        backgroundColor: "#F5890C",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:10,
      },
     appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
})
export default appStyle;
