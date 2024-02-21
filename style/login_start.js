
import { StyleSheet } from "react-native";

const appStyle =StyleSheet.create({
  body:
  {
    backgroundColor:'white',
  },
    bgRoundedWhite: {
        width: "90%",
        padding: 10,
        elevation: 10,
        backgroundColor: "#FFFF",
        borderRadius: 10,
        borderColor: "#e9810e",
        flexDirection: 'row',
        marginTop: 60,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'
      },

      bgRoundedWhiteMedium:{
        width: "48%",
        padding: 10,
        elevation: 10,
        backgroundColor: "#FFFF",
        borderRadius: 10,
        borderColor: "#e9810e",
        flexDirection: 'row',
        marginTop: 30,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'  
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
       smallRounderContainer:{
        width: "90%",
        // backgroundColor: "#FFC44D",
        borderColor:'#FFC44D',
        padding: 10,
        height:129,
        // elevation: 2,
        borderWidth:2,
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:15,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'  
      },
      download:
      {
        backgroundColor:'#fff',
        height:20,
        width:110,
        // fontSize:8,
        borderRadius:16,
        textAlign: 'center'  
      },
       leftContainerPromotion:
      {
        width:'65%',
        top:10,
      },
       leftContainerForget:
      {
        marginRight:'70%',
        width:'20%',
        height:"60%",
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',  
        top:10,
        borderRadius:50,
        backgroundColor:'#FFF5E1CC',
      }, 
      rightContainerForget:{
          width:'50%',
          position: 'absolute',
          height:80,
          alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        bottom:0,
          // top:10,
          // right:30,
      },
      rightContainerPromotion:{
          width:'30%',
      },
      rightContainerPromotion:{
          width:'30%',
      },
      rightIconPromotion: {
          width: 100,
          height: 100,
          flexDirection: 'row',
      },
      rightIconForget: {
          width: 30,
          height: 30,
          flexDirection: 'row',
      },
      textWhite: {
        marginTop: 10,
        marginStart: 20,
        fontSize: 15,
        color: "#FFFF",
      },
      textBlack: {
        marginTop: 10,
        marginStart: 20,
        fontSize: 15,
        color: "#0000",
      },
      textButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#e9810e",
      },
      textHeding: {
        fontSize: 18,
        color: '#383937',
        marginStart: 20,
        marginTop: 10,
      },
    
      inputEmail: {
        width: "90%",
        backgroundColor: "#cd730c",
        padding: 15,
        borderRadius: 30,
        color: "#BF0E0E",
        alignSelf: 'center',
      },
      inputSearch: {
        width: "100%",
        backgroundColor:'white',
        zIndex: 0, // Ensure border has z-index of 0
      },
      welcome:
      {
        fontSize:40,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
         fontWeight: "bold",
         marginBottom:20,  
      },
      logo:
      {
        marginTop:20,
        alignSelf: 'center',
        width: 300, 
        height: 250,
        resizeMode: 'stretch' 
      },
      google:
      {
        width: 23, 
        height: 23 
      },
      signIn:
      {
        width: "90%",
        padding:10,
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
      appButtonTextSoical: {
        fontSize: 14,
        color: "#101828",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
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
      leftContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        width:'100%',
        marginRight:"5%",
      },
    rightContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      width:'100%',
      marginRight:"3%",
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
