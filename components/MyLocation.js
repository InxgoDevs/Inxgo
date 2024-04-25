import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  PermissionsAndroid,
  Button,
  Linking,
} from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { CommonImages } from "../constants/Images";
import { Bold } from "../constants/fonts";
import { responsiveWidth } from "react-native-responsive-dimensions";

const YOUR_API_KEY = "AIzaSyBumeTNvlZPonN8-rnzCqt1MHyLjSNHMgA";

const MyLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs access to your location.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
              // Call getAddressFromCoordinates with the correct parameters
              getAddressFromCoordinates({ latitude, longitude })
                .then((address) => {
                  setAddress(address);
                })
                .catch((error) => {
                  console.error("Error fetching address:", error);
                });
            },
            (error) => {
              setErrorMessage(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        } else {
          setErrorMessage("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    getLocation();

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const openAppSettings = () => {
    Linking.openSettings();
  };

  function getAddressFromCoordinates({ latitude, longitude }) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${YOUR_API_KEY}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("Response", responseJson);

          if (responseJson.status === "OK") {
            resolve(responseJson?.results?.[0]?.formatted_address);
          } else {
            reject("Address not found");
          }
        })
        .catch((error) => {
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
            // backgroundColor: "red",
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
