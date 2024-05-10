import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const LocalSVGTest = () => {
  return (
    <View style={styles.container}>
      {/* Importing and rendering a local SVG file */}
      <SvgUri uri={require('../../assets/svg/dangercircle.svg')} width="100" height="100" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocalSVGTest;
