import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View,  Button, Image, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

const paySilLogo = require('../assets/images/PAYSIL.png');

const HomeScreen = ({navigation}) => {
  
const pressHandler = () => {
      navigation.navigate('Splash2');
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
          <View >
            <Image source={paySilLogo} style={{ width: 250, height: 160 }}></Image>
            <Text style={styles.logoText}>...ready to meet your payment needs!</Text>        
          </View>
        
        <TouchableOpacity onPress={pressHandler} style={styles.signIn}> 
          <Text style={styles.textSign}>Next</Text>
        </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  signIn: {
      alignItems: 'flex-end',
      marginTop: 80,
      backgroundColor: '#2074A4',
      width: 150,
      height: 40,
      marginLeft: 'auto',
      right: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
