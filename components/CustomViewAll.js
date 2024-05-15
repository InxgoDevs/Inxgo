import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Regular } from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';
 import SvgUri from 'react-native-svg-uri';
//import { SvgUri } from 'react-native-svg';


const CustomViewAll = ({ items }) => {
      const imageDisplay = (image) => {
        console.log('Image:', image); // Add this line for logging
        if (typeof image === 'object' && image.uri) {
            if (image.uri.includes('.svg')) {
                return (
                    <SvgUri
                        width={responsiveWidth(15)}
                        height={responsiveHeight(6)}
                        source={{ uri: image.uri }}
                    />
                );
            } else {
                return (
                    <Image
                        style={{
                            resizeMode: 'contain',
                            width: responsiveWidth(15),
                            height: responsiveHeight(6)
                        }}
                        source={{ uri: image.uri }}
                        onError={() => console.log(`Error loading image: ${image.uri}`)}
                    />
                );
            }
        } else {
            console.log(`Invalid image source: ${image}`);
            return null; // Or any other fallback you prefer
        }
    };
    const navigation = useNavigation();
    return (
  <View style={styles.container}>
    {items.map((item, index) => (
      <TouchableOpacity key={index} onPress={() => navigation.navigate('SearchProvider')}>
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
            <View key={index}>
                {imageDisplay(item.image_path)}
            </View>
          <Text style={{ fontSize: 11, fontFamily: 'Regular' }}>{item.textContent}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: responsiveWidth(100),
        height: responsiveHeight(9),
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 20
    },
});

export default CustomViewAll;
