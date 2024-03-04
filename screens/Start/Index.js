import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Text, Image,ScrollView } from 'react-native';
import appStyle from '../../style/start';
import { SimpleCarousel } from 'react-native-simple-banner-carousel';
import { scale, verticalScale } from 'react-native-size-matters';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Assets } from '@react-navigation/stack';

const start1 = require('../../assets/start1.png');
const start2 = require('../../assets/start2.png');
const start3 = require('../../assets/start3.png');
const inxgoLogo = require('../../assets/svg/inxgo-logo.png');

const Index = ({ navigation }) => {
  useEffect(() => {
    console.log('this.props');
  }, []);

  return (
    <ScrollView keyboardDismissMode={'on-drag'} style={{ flex: 1, width: responsiveWidth(100) }}>
      <View style={appStyle.container}>
        {/* Carousel Container */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: responsiveWidth(100), height: responsiveHeight(75), backgroundColor: 'blue' }}>
          <SimpleCarousel  
            data={[
              { title: 'Become a Provider and Monetize Your Skills Today..', source: start1, text: 'Worked on Your Terms!' },
              { title: 'Find Reliable Service Providers Nearby..', source: start3, text: 'Discover a World of Convenience!' },
              { title: 'Embrace Freedom and Flexibility with Our Innovative App!', source: start2, image: inxgoLogo }
            ]}
            renderItem={(props, i, width) => (
              <View style={{ width: '100%', height: '100%' }}> 
                <View style={{ backgroundColor:'red' }}>
                  <Image
                    resizeMode="contain"
                    style={{ width: width, height:  300 }}
                    source={props.source}
                  />
                </View>
                <View style={{ height: verticalScale(500), width: '100%', backgroundColor:'green' }}>
                  {props.image && <Image style={{ width: '100%', height: responsiveHeight(7) }} source={props.image} resizeMode="contain" />}
                  <Text style={{ fontWeight: 'bold', fontSize: responsiveFontSize(3.5), padding: scale(10), textAlign: 'center', alignSelf: 'center' }}>{props.text}</Text>
                  <Text style={{ fontSize: responsiveFontSize(2.9), textAlign: 'center', paddingHorizontal: responsiveWidth(20) }}>{props.title}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <StatusBar translucent={true} />
      </View>
      <View style={{ height: responsiveHeight(20) }}>
        <TouchableOpacity onPress={() => navigation.navigate('StartLogin')} style={appStyle.appButtonContainer}>
          <Text style={appStyle.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Index;
