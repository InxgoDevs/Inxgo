import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import profile from "../../style/profile";
const arrow_back = require("../../assets/arrow_back.png");
const Data = [
 { id: '1', text: 'Push Notification', imageSource: require('../../assets/toggle.png') },
 { id: '2', text: 'Email Notifications', imageSource: require('../../assets/ftoggle.png') },
 { id: '3', text: 'In-App Notifications', imageSource: require('../../assets/toggle.png') },
 { id: '4', text: 'Notification Sound', imageSource: require('../../assets/toggle.png') },
 { id: '5', text: 'Vibrate', imageSource: require('../../assets/ftoggle.png') },
 { id: '6', text: 'App Update', imageSource: require('../../assets/ftoggle.png') },
];

const ProfileNotifications = ({navigation}) => {
 // Initialize the state with the default image sources for each item
 const [selectedNotifications, setSelectedNotifications] = useState(
   Data.reduce((acc, item) => ({ ...acc, [item.id]: item.imageSource }), {})
 );

 const toggleNotification = (id) => {
    setSelectedNotifications(prevState => ({
      ...prevState,
      [id]: prevState[id] === require('../../assets/toggle.png')
        ? require('../../assets/ftoggle.png')
        : require('../../assets/toggle.png'),
    }));
 };

 const renderItem = ({ item }) => {
    return (
        
      <View style={styles.itemContainer}>
      
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity onPress={() => toggleNotification(item.id)}>
          <Image
            style={styles.image}
            source={selectedNotifications[item.id]}
          />
        </TouchableOpacity>
        
      </View>
    );
 };

 return (
    <View style={styles.container}>
    
        <View style={profile.welcome}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Image style={profile.arrow_back} source={arrow_back} />
          </TouchableOpacity>
          <Text style={profile.welcomeText}>Notification</Text>
        </View>
     
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
    margin: 15,
    padding: 15,
 },
 container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
 },
 image: {
    width: 30,
    height: 20,
 },
 text: {
    fontSize: 15,
    color: 'black',
 },
});

export default ProfileNotifications;
