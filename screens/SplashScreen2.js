import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';


const SplashScreen2 = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('Splash3');
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image
                source={require('../assets/images/poscard.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>

            <View style={styles.footer}>
            <Text style={styles.title}> Endless Payment Options! </Text>
            <Text style={styles.text}> Create wallet, Withdraw, Perform Fund Transfer, Get Cash, And Pay All Utility Bills. </Text>
            {/* <View > */}
              <TouchableOpacity style={styles.signIn} onPress={pressHandler}> 
                  <Text style={styles.textSign}>Next</Text>
              </TouchableOpacity>
            {/* </View> */}
            </View>
       
        </View>
    )
}

export default SplashScreen2;

  

const height = Dimensions.get("window").height;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer:{
    flex: 1,
    backgroundColor: '#2074A4',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginHorizontal: 12 /2
  },
  title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: '#CFD3D5',
      marginTop: 30
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      backgroundColor: '#08d4c4'
  },
  signIn: {
      alignItems: 'flex-end',
      marginTop: 80,
      backgroundColor: '#fff',
      width: 150,
      height: 40,
      marginLeft: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
    },
    textSign: {
        color: '#2074A4',
        fontWeight: 'bold'
    }
});
