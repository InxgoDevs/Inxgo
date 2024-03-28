import React, { useState } from "react";
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity,ScrollView} from 'react-native';
import profile from "../../style/profile";
const arrow_back = require("../../assets/arrow_back.png");

const Data = [
 { id: '1', text: 'English (US)', imageSource: require('../../assets/Radial.png') },
 { id: '2', text: 'English (UK)', imageSource: require('../../assets/unselected.png') },
 { id: '3', text: 'Urdu', imageSource: require('../../assets/unselected.png') },
 { id: '4', text: 'French', imageSource: require('../../assets/unselected.png') },
 { id: '5', text: 'Hindi', imageSource: require('../../assets/unselected.png') },
 { id: '6', text: 'Arabic', imageSource: require('../../assets/unselected.png') },
 { id: '7', text: 'Japanese', imageSource: require('../../assets/unselected.png') },
 { id: '8', text: 'German', imageSource: require('../../assets/unselected.png') },
 { id: '9', text: 'Portuguese', imageSource: require('../../assets/unselected.png') },
 { id: '10', text: 'Bengali', imageSource: require('../../assets/unselected.png') },
 { id: '11', text: 'Indonesian', imageSource: require('../../assets/unselected.png') },
 { id: '12', text: 'Russian', imageSource: require('../../assets/unselected.png') },
 { id: '13', text: 'Spanish', imageSource: require('../../assets/unselected.png') },

];

const Languages = ({navigation}) => {
 const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

 const renderItem = ({ item }) => (
    
    <View style={styles.itemContainer}>
    
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity onPress={() => setSelectedLanguage(item.text)}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.text === selectedLanguage ? require('../../assets/Radial.png') : require('../../assets/unselected.png')} />
        </View>
      </TouchableOpacity>
      
    </View>
    
 );

 return (
    <View>
<TouchableOpacity onPress={() => navigation.navigate("Booking")}>
        <View style={profile.welcome}>
          <Image style={profile.arrow_back} source={arrow_back} />
          <Text style={profile.welcomeText}>Notification</Text>
        </View>
      </TouchableOpacity>
    
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
      />
      </View>
 );
};

const styles = StyleSheet.create({
 itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    margin: 10,
    flex:1,
    padding: 16,
 },
 imageContainer: {
    marginLeft: 10,
 },
 image: {
    width: 20,
    height: 20,
 },
 text: {
    fontSize: 16,
    color: 'black',
 },
});

export default Languages;
