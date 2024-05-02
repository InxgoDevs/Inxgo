//import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';
import profile from "../../style/profile";
const arrow_back = require("../../assets/arrow_back.png");
import { Regular } from "../../constants/fonts";




const Security = () =>{
return(
    <View style={{backgroundColor:'#FFFFFF',flex:1}}>
    <TouchableOpacity onPress={() => navigation.navigate("Booking")}>
        <View style={profile.welcome}>
          <Image style={profile.arrow_back} source={arrow_back} />
          <Text style={profile.welcomeText}>Security</Text>
        </View>
      </TouchableOpacity>

<View style={{flexDirection:"row",alignSelf:"center",marginVertical:80}}>
<Image source={require('../../assets/Character.png')}/>
<Image source={require('../../assets/Tab.png')}/>

</View>

<Text style={styles.text1}>Select the option you want to change.</Text>
<View style={{borderWidth:2,height:'16%',margin:20,borderRadius:20,borderColor:'#FFC44D'}}>



<View style={{position: 'relative'}}>
<Image source ={require('../../assets/Ellipse.png')} style={styles.Image1}/>
<Image source={require('../../assets/password.png')} style={styles.Image2}/>

<View style={{alignSelf:"center",top:60}}>
<Text style={styles.Text2}>Change Pin</Text>

</View>
</View>

</View>
<View style={{borderWidth:2,height:'16%',margin:20,borderRadius:20,borderColor:'#FFC44D'}}>



<View style={{position: 'relative'}}>
<Image source ={require('../../assets/Ellipse.png')} style={styles.Image1}/>
<Image source={require('../../assets/key.png')} style={styles.Image2}/>

<View style={{alignSelf:"center",top:60}}>
<Text style={styles.Text2}>Change Password</Text>

</View>
</View>

</View>
    </View>


)


}
export default Security;

const styles=StyleSheet.create({

    text1:{
        fontSize:15,
        color:'black',
        paddingStart:15,
        fontFamily:Regular


    },

    Text2:{
    color:'black',
    fontWeight:"bold",
    fontFamily:Regular

   

    },


    Image1:{

        position: 'absolute',
        alignSelf:"flex-start",
        left:20,
        marginVertical:30

    },
    Image2:{

        position: 'absolute',
        alignSelf:"flex-start",
        top:45,
        left:35

    }



})