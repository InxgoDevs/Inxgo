import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CustomButton from '../../components/CustomButton';
import Start from '../Login/Start';
import image_upload from '../../assets/image_upload.png';
import wallet from "../../style/wallet";
import rightarrow from '../../assets/rightarrow.png';
import circle from '../../assets/icons/circle.png';
import location from '../../assets/icons/location.png';
import hrs from '../../assets/icons/hrs.png';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Cancel
 from '../CancelScreen/Cancel';



const Tracker = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleStartButtonClick = () => {
    setIsPlaying(true);
  };
 
  // const [secondsLeft, setSecondsLeft] = useState(60);

  // useEffect(() => {
  //   let intervalId;
  //   if (secondsLeft > 0) {
  //     intervalId = setInterval(() => {
  //       setSecondsLeft(prevSeconds => prevSeconds - 1);
  //     }, 1000);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [secondsLeft]);

  return (
    <View
      style={{
        marginTop: '10%',
        marginRight: '2%',
        marginLeft: '2%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
      }}>
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
            <View
              style={{
                right: 10,
                width: 50,
                height: 20,
                backgroundColor: '#FFE24D',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 10 }}>Active</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          marginTop: 35,
          width: responsiveWidth(80),
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Location, Hours, Rate */}
      </View>
      <View
        style={{
          width: responsiveWidth(80),
          marginLeft: '6%',
          flexDirection: 'row',
          borderWidth: 1.5,
          borderRadius: 10,
          borderColor: '#E8ECF1',
          marginTop: 20,
        }}>
        <Text
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 10,
            marginTop: 10,
            marginBottom: 10,
            fontWeight: '400',
          }}>
          We have assigned you a plumbing task for an urgent repair at Sadiq Centre, Lahore. Please make arrangements to visit the location as soon as possible and address the issue accordingly. Your expertise and prompt response are greatly appreciated.
        </Text>
      </View>
      {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <CircularProgress
          value={0}
          clockwise={false}
          radius={65}
          maxValue={60}
          initialValue={60}
          progressValueColor={'#fff'}
          activeStrokeColor={'#FFC44D'}
          inActiveStrokeColor={'#E8ECF1'}
          activeStrokeWidth={3}
          inActiveStrokeWidth={3}
          duration={60000}
         //delay={7000}
          // onAnimationComplete={() => alert('Time out')}
        />
        <Text style={{ fontSize: 24, position: 'absolute', zIndex: 1 }}>{secondsLeft}</Text>
      </View> */}
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
      <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={60}
     colors={'#FFC44D'}
    //  colorsTime={[7, 5, 2, 0]}
    strokeWidth={3}
    trailColor={'#E8ECF1'}
    isGrowing={true}
    radius={30}
    style={{ transform: [{ rotate: '-90deg' }] }}
    rotation='counterclockwise'     
  >
    {({ remainingTime }) => <Text>{remainingTime} </Text>}
  </CountdownCircleTimer>

      </View>
      
      <View>
        <CustomButton title={"Start"} color= '#FFC44D' onPress={()=>navigation.navigate('CancelScreen')}/>
      </View>
      
    </View>
  );
};

export default Tracker;
