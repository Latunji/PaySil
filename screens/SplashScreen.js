import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const exampleImage = require('../assets/images/trending_up.png');


const SplashScreen = ({}) => {
  return (
    <View style={styles.container}>
       <Image source={exampleImage}
      style={{ width: 250, height: 160 }}></Image>
      <Text style={styles.logoText}>...ready to meet your payment needs!</Text>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    color: '#808080',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    marginTop: 20,
  },
});
