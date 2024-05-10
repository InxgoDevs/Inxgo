import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Regular } from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';
 import SvgUri from 'react-native-svg-uri';
//import { SvgUri } from 'react-native-svg';

const CustomViewAll = ({ items }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                console.log("Image Path:", item.image_path),
                <TouchableOpacity key={index} onPress={() =>navigation.navigate('SearchProvider')}>
                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    
                        {/*== <Image style={{ resizeMode: 'contain', width: responsiveWidth(15), height: responsiveHeight(6) }} source={item.imageSource} /> */}
                        <SvgUri
    width="100%" // Adjust as needed
    height="100%" // Adjust as needed
    uri={item.image_path} // Corrected: Access the 'uri' property of the object
/>


                        
                        <Text style={{ fontSize: 11,fontFamily:Regular}}>{item.textContent}</Text>
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
