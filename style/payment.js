
import { StyleSheet } from "react-native";

const appStyle =StyleSheet.create({
  body:
  {
    backgroundColor:'white',
  },
  inputPayment: {
        width: "100%",
        backgroundColor:'#FAFAFA',
        zIndex: 0, // Ensure border has z-index of 0
      },
   inputSearch: {
        width: "49%",
        marginRight:"1%",
         backgroundColor:'#FAFAFA',
        zIndex: 0, // Ensure border has z-index of 0
      },
      logo:
      {
        marginTop:20,
        width: 150, 
        height: 120,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch' 
      },
      cardContainer: {
        width: "90%",
        height:70,
        // backgroundColor: "#FFFF",
        flexDirection: 'row',
        marginTop: 5,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      download:
      {
        backgroundColor:'#FFF5E1CC',
        height:30,
        width:150,
        fontSize:16,
        borderRadius:16,
        textAlign: 'center',
        textAlignVertical: "center" 
      },
      welcome:
      {
        fontSize:14,
        marginLeft:"5%",
        marginBottom:20,  
      },
      paymentAdd:
      {
        width:'80%',
        fontSize:14,
        textAlign: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
      },
      google:
      {
        width: 23, 
        height: 23,
        resizeMode: 'stretch' 
      },
      signIn:
      {
        width: "90%",
        padding:10,
      },
      radio:
      {
        // backgroundColor:'red',
        height: 24,
        width: 24,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#000',
        alignSelf: 'flex-end',
      },
      appButtonContainer: {
        width:"90%",
        alignSelf: 'center',
        backgroundColor: "#FFC44D",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:10,
      },
      appButtonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontFamily: 'Inter'
       
      },
      downloadView:{
        marginTop:"30%",
        marginBottom:"50%",
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
      },
      appButtonTextSoical: {
        fontSize: 14,
        color: "#101828",
        fontWeight: "bold",
        borderRadius:10,
        // alignSelf: "center",
        flexDirection: 'row',
        textTransform: "uppercase"
      },
      appButtonSoical: {
        width:"90%",
        elevation: 1,
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
          height: 1,
          width: 1
        },

        alignSelf: 'center',
        // borderWidth: 1,
        borderColor: "white",
        // borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:10,
         height:57,
         justifyContent: 'center',
      },
    rowLabelText: {
      fontSize: 16.0,
    },
    line:{
      flex: 1,
      height: 1,
      backgroundColor: 'black'
    },
    lineText:{
      width: 50,
      textAlign: 'center'
    },
    signUp:{
       fontWeight:'bold',
      fontSize:15,
       fontFamily: 'Inter'
    },
    signUpText:
    {
      color:'#FFC44D',
      fontWeight:'bold',
      fontSize:15,
       fontFamily: 'Inter'
    }


})
export default appStyle;
