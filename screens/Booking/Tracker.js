import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Circle } from "react-native-progress";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";
import image_upload from "../../assets/image_upload.png";
import wallet from "../../style/wallet";
import circle from "../../assets/icons/circle.png";
import location from "../../assets/icons/location.png";
import hrs from "../../assets/icons/hrs.png";

const Tracker = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state to track if the timer is paused
  const [progressComplete, setProgressComplete] = useState(false);

  const [buttonText, setButtonText] = useState("Start");

  useEffect(() => {
    let intervalId;
    if (isPlaying && !isPaused) { // Check if the timer is not paused
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime >= 28800) {
            // 8 hours in seconds
            setIsPlaying(false);
            setProgressComplete(true);
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying , isPaused]);

  const handleStartButtonClick = () => {
    if (isPlaying && !isPaused) { // If the timer is currently playing and not paused
      setIsPlaying(false); // Pause the timer
      setIsPaused(true); // Set the timer to paused state
    } else { // If the timer is not playing or is paused
      setIsPlaying(true); // Start the timer
      setIsPaused(false); // Set the timer to playing state
      setProgressComplete(false); // Reset progress completion when starting
    }
  };

  const handleEndButtonClick = () => {
    setIsPlaying(false);
    setIsPaused(false); // Ensure the timer is not paused when ending
    setProgressComplete(true); // Complete the progress bar when ending
  };

  // Convert time to HH:MM:SS format
  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);

  // Calculate progress for the circular progress bar
  // This will fill up in real-time as the timer counts up
  // Invert the progress value to make it appear anticlockwise
  const progress = progressComplete ? 1 : 1 - time / 28800; // 8 hours in seconds

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={wallet.image} source={image_upload} />
        <View style={wallet.LeftContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18 }}>Mark Tuan</Text>
          </View>
          <Text style={{ fontSize: 12 }}>Plumber</Text>
        </View>

        <View style={wallet.RightContainer}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View
              style={{
                right: 10,
                width: 50,
                height: 20,
                backgroundColor: "#FFE24D",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10 }}>Active</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          //  marginBottom:120,
          //position:"absolute",
          width: "80%",
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          height:responsiveHeight(5),
          //backgroundColor:"orange"
        }}
      >
        <View style={{ width: "38%", marginLeft: 5, flexDirection: "row" }}>
          <Image source={location} />
          <Text style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>
            Sadiq Centre LHR
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            left: 10,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={{ width: 15, height: 15 }} source={hrs} />
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            4 hrs
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            right: 5,
            flexDirection: "row",
          }}
        >
          <Image style={{ width: 15, height: 15 }} source={circle} />
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            $40/ hr
          </Text>
        </View>
      </View>
      <View style={{ width: responsiveWidth(85), flexDirection: "row" }}>
        <View
          style={{
            width:responsiveWidth(85),
            marginLeft:20,
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#E8ECF1",
            height:responsiveHeight(15),
           // backgroundColor:"red"
            
          }}
        >
          <Text
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              
              fontSize: 10,
              marginBottom: 10,
            }}
          >
            We have assigned you a plumbing task for an urgent repair at Sadiq
            Centre, Lahore. Please make arrangements to visit the location as
            soon as possible and address the issue accordingly. Your expertise
            and prompt response are greatly appreciated.
          </Text>
        </View>
      </View>
      <View style={styles.timerContainer}>
        <Circle
          size={150}
          strokeWidth={3}
          progress={progress}
          unfilledColor="#E8ECF1"
          color="#FFC44D"
          showsUnfilled={false} // Hide the unfilled part of the circle
        />
        <Text style={styles.timerText}>{formattedTime}</Text>
      </View>
      <View style={styles.timerButtons}>
        <CustomButton
          title={isPlaying && !isPaused ? "Pause" : "Start"}
          color="#FFC44D"
          onPress={handleStartButtonClick}
        />
        <CustomButton
          title={"End"}
          color="#FFC44D"
          onPress={handleEndButtonClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: "center",
   // alignItems: "center",
    backgroundColor: "#fafafa",
  },
  timerContainer: {
    //marginTop: 0,
    alignItems: "center", // Center the timer text and circle
    justifyContent: "center", // Center the timer text and circle vertically
   // position: "absolute", // Use relative positioning to overlay the text
  },
  timerText: {
    fontSize: 18,
   // position: "absolute",
    // Position the text absolutely within the timerContainer
    //top: "75%", // Center the text vertically
   left: "12%",
   bottom:35, // Center the text horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Adjust the text position to be centered
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    //position: "absolute",
   // top: 20,
    //backgroundColor:"red",
    height:responsiveHeight(10),

   // marginTop: 20,
    alignItems: "center", // Center the infoContainer vertically
    justifyContent: "center", // Center the infoContainer horizontally
  },
  timerButtons: {
   marginTop: 80,
    flexDirection: "row",
    justifyContent:'space-evenly', // Add space between the buttons
  //  width: "100%", // Ensure the buttons span the full width of the container
    marginBottom:0, // Add space at the bottom
    //paddingHorizontal: 20, // Add horizontal padding if needed

  },
});

export default Tracker;
