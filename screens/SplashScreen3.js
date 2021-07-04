import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';


const SplashScreen3 = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image
                source={require('../assets/images/agents.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>

            <View style={styles.footer}>
              {/* <ImageBackground  source={require('../assets/images/PAYSIL.png')} style={styles.image}> */}
            <Text style={styles.title}> Instant Agent Settlement! </Text>
            <Text style={styles.text}> We Have Partnered With High Tech Companies And Banks To Ensure Our Agents Get Their Money On The Go.  </Text>
            {/* <View > */}
            <TouchableOpacity style={styles.signIn} onPress={pressHandler}> 
              <Text style={styles.textSign}>Next</Text>
            </TouchableOpacity>
            {/* </View> */}
            {/* </ImageBackground> */}
            </View>
       
        </View>
    )
}

export default SplashScreen3;

  

const height = Dimensions.get("window").height;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
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
