import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import appStyle from '../../style/footer';
import profile from '../../style/profile';
import Footer from '../Footer/Index';
import { SvgUri, SvgXml } from 'react-native-svg';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import wallet from '../../style/wallet';
const image_upload = require('../../assets/image_upload.png');
const arrow_back = require('../../assets/arrow_back.png');
const rightarrow = require('../../assets/rightarrow.png');
const Loading = require('../../assets/Loading_icon.gif');
const circle = require('../../assets/icons/circle.png');
const location = require('../../assets/icons/location.png');
const hrs = require('../../assets/icons/hrs.png');
const map = require('../../assets/icons/map.png');

const Detail = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(navigation);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView keyboardDismissMode="on-drag" style={{ backgroundColor: '#FFFFFF' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>My Jobs</Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginRight: '2%', marginLeft: '2%' }}>
          <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }}>
            <Image style={wallet.image} source={image_upload} />
            <View style={wallet.LeftContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18 }}>Mark Tuan</Text>
              </View>
              <Text style={{ fontSize: 12 }}>Plumber</Text>
            </View>
            <View style={wallet.RightContainer}>
              <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                <View style={{ right: 10, width: 80, height: 30, backgroundColor: '#FFC44D', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Active</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={wallet.line} />
          <View style={{ marginTop: 10, marginBottom: 10, width: '90%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '38%', marginLeft: 5, flexDirection: 'row' }}>
              <Image source={location} />
              <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 2 }}>Sadiq Centre LHR</Text>
            </View>
            <View style={{ width: '30%', left: 10, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 15, height: 15 }} source={hrs} />
              <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold', marginLeft: 2 }}>4 hrs</Text>
            </View>
            <View style={{ width: '30%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', right: 5, flexDirection: 'row' }}>
              <Image style={{ width: 15, height: 15 }} source={circle} />
              <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold', marginLeft: 2 }}>$40/hr</Text>
            </View>
          </View>
          <View style={{ marginBottom: 10, width: '90%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '50%', marginLeft: 5, flexDirection: 'row' }}>
              <Text style={{ fontSize: 12, marginLeft: 2 }}>Date & Time</Text>
            </View>
            <View style={{ width: '50%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', right: 5, flexDirection: 'row' }}>
              <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold', marginLeft: 2 }}>June 11, 2023 | 11:00 AM</Text>
            </View>
          </View>
          <View style={wallet.line} />
          <View style={{ marginBottom: 10, width: '90%', flexDirection: 'row' }}>
            <View style={{ width: '30%', marginLeft: '6%', flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, marginTop: 10, fontWeight: 'bold' }}>Description</Text>
            </View>
          </View>
          <View style={{ marginBottom: 10, width: '90%', flexDirection: 'row' }}>
            <View style={{ width: '100%', marginLeft: '6%', flexDirection: 'row', borderWidth: 1, borderRadius: 10, borderColor: '#E8ECF1' }}>
              <Text style={{ paddingLeft: 10, paddingRight: 10, fontSize: 14, marginTop: 10, marginBottom: 10 }}>
                We have assigned you a plumbing task for an urgent repair at Sadiq Centre, Lahore. Please make arrangements to visit the location as soon as possible and address the issue accordingly. Your expertise and prompt response are greatly appreciated.
              </Text>
            </View>
          </View>
          <View style={{ position: 'relative', zIndex: 0 }}>
            <Image style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 0 }} source={map} />
            <TouchableOpacity onPress={() => navigation.navigate('Accepted')} style={[styles.Btncontainers, { position: 'absolute', zIndex: 1, bottom: 20, alignSelf: 'center' }]}>
              <Text style={styles.btntxts}>Track Client</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 30,
    width: responsiveWidth(100),
    flex: 1,
  },
  TextPin: {
    borderWidth: 1,
    width: 80,
    height: 60,
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
    borderColor: '#D9D9D9',
  },
  btntxts: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  Btncontainers: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    backgroundColor: '#FFC44D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'flex-end',
  },
  arrow_backForget: {
    top: 6,
    marginRight: 20,
  },
});

export default Detail;
