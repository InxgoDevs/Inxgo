import React, { useState, useEffect } from "react";
import { View, Image, Text, Button, Linking } from "react-native";
import * as Location from "expo-location";
import { CommonImages } from "../constants/Images";
import { Bold } from "../constants/fonts";
import { responsiveWidth } from "react-native-responsive-dimensions";

// Consider storing your API key in an environment variable or secure storage
const YOUR_API_KEY = "AIzaSyBumeTNvlZPonN8-rnzCqt1MHyLjSNHMgA";

const MyLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMessage("Location permission denied");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setLocation({ latitude, longitude });
        getAddressFromCoordinates({ latitude, longitude })
          .then((address) => {
            setAddress(address);
          })
          .catch((error) => {
            console.error("Error fetching address:", error);
            setErrorMessage("Failed to fetch address");
          });
      } catch (err) {
        console.warn(err);
        setErrorMessage("Failed to get location permission");
      }
    };

    getLocation();
  }, []); // Empty dependency array since no external dependencies are used

  const openAppSettings = () => {
    Linking.openSettings();
  };

  function getAddressFromCoordinates({ latitude, longitude }) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${YOUR_API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status === "OK") {
            resolve(responseJson?.results?.[0]?.formatted_address);
          } else {
            reject("Address not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching address:", error);
          reject(error);
        });
    });
  }

  const formatLocation = () => {
    if (address) {
      return address;
    } else {
      return "Fetching location...";
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {errorMessage ? (
        <>
          <Text>{errorMessage}</Text>
          <Button title="Open Settings" onPress={openAppSettings} />
        </>
      ) : (
        <View
          style={{
            flexDirection: "row",
            width: responsiveWidth(70),
          }}
        >
          <Image
            style={{
              width: 35,
              height: 30,
              resizeMode: "contain",
            }}
            source={CommonImages.Mylocationpng}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontFamily: Bold }}>
              {formatLocation()}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default MyLocation;
