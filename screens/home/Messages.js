import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Footer from '../Footer/Index';
const Messages = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFF',
      }}>
      <Text>Notification!</Text>
       <Footer/>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});