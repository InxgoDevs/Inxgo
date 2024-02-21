
import { StyleSheet } from "react-native";

const appStyle =StyleSheet.create({
   leftContainerPromotion:
      {
        width:'65%',
        top:10,
      }, 
      welcome:
      {
        marginTop:150,
        fontSize:40,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginBottom:20,  
      },
      appButtonSoical: {
        width:"90%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "black",
        // borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:10,
         height:57,
         justifyContent: 'center',
      },
    lineText:{
      width: 130,
      textAlign: 'center'
    },
    centerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        width:'100%',
      },
      appButtonSoical: {
        width:"30%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "#E8ECF1",
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
        // marginTop:5,
        marginLeft:10,
         height:57,
         justifyContent: 'center',
      },

})
export default appStyle;
