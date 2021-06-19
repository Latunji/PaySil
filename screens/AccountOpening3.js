import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Modal from 'react-native-modal';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TouchableOpacity, ImageBackground, Picker, Dimensions, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import { Component } from 'react';
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';


const AccountOpening3  = ({navigation, route}) => {

    
    const [image, setImage] = React.useState('https://api.adorable.io/avatars/80/abott@adorable.png');

    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const choosePhotoFromLibrary2 = () => {
      ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      }).then(
        image => {
          setImage(image.path);
        }
      );
    }

     launchImageLibrary = () => {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    }

      ImagePicker.launchImageLibrary(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
        }
      });

    const [data, setData] = React.useState({
      email: route.params.paramKey.email,
      firstname: route.params.paramKey.firstname,
      lastname: route.params.paramKey.lastname,
      middlename: route.params.paramKey.middlename,
      username: route.params.paramKey.username,
      bank: route.params.paramKey.bank,
      dob: route.params.paramKey.dob,
      houseNumber: route.params.paramKey.houseNumber,
      lgaCode: route.params.paramKey.lgaCode,
      streetName: route.params.paramKey.streetName,
      city: route.params.paramKey.city,
      gender: route.params.paramKey.gender,
      bvn: route.params.paramKey.bvn,
      customerImage: '',
      customerSignature: '',
      openingBalance: '',
      check_textInputChange: false,
      check_numberInputChange: false,
      check_numberInputChange2: false,
      secureTextEntry: true,
      secureTextEntry2: true,
      secureTextEntry3: true
    });
   


    const submit = ()  =>
    {
        console.log(route.params.paramKey.email);
    
        
        console.log(data);

        navigation.navigate('RegisterScreen3', {
            paramKey2: data
        });
        
    
    

        //  let _data = {
        //     fullname: data.fullname,
        //     phonenumber: data.phone, 
        //     password: data.password,
        //     email: data.email
        //   }
          
        

        //  var url = "http://192.168.43.238:8080/PaySil/RestfulApi/register";
        //  fetch(url, {
        //      method: "POST",
        //      body: JSON.stringify(_data),
        //      headers: {
        //         "Content-Type": "application/json; charset=UTF-8"}
        //     })
        //     .then(res => res.json())
        //     .then((json) => {  
        //     if(json.responseCode == '00'){
        //         alert('Registration Successful! Please Login...');
        //         navigation.navigate('Login');
        //     }
        //     else if(json.responseCode == '02'){
        //         alert('Email Already Exist!');
        //     }
        //     else if(json.responseCode == '03'){
        //         alert('Phone Number Has Been Used!');
        //     }})
        //     .catch(err => console.log('Error: ', err));
        
    }


    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const numberInputChange = (val) =>{
        if (val.length != 0) {
            setData({
                ...data,
                houseNumber: val,
                check_numberInputChange: true
            });
        }
        else{
            setData({
                ...data,
                houseNumber: val,
                check_numberInputChange: false
            });
        }
    }




    return(
        // <View style={styles.container}>
        <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{width:"100%", height:"100%"}}>
            <View style={styles.header}>
            <Image
                source={require('../assets/images/PAYSIL.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            <Text style= {styles.text_header}> Account Opening </Text>    
            </View>            

            <Animatable.View
             animation="fadeInUpBig"
             style={styles.footer}>


       
        
            <Text style={styles.text_footer}>Opening Balance </Text>   
            <View style={styles.action}>
                <Feather
                name = "money"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter amount"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType='numeric'
                onChangeText={(val)=>numberInputChange(val)}
                />
                {data.check_numberInputChange ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 


            <TouchableOpacity 
      onPress={()=>launchImageLibrary}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text_footer}>Image</Text>   
                  <Icon
                    name="camera"
                    size={55}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text_footer}>Signature</Text>   
                  <Icon
                    name="camera"
                    size={55}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>



           
            <View style={styles.button}>

               <TouchableOpacity
               onPress={()=>navigation.navigate('AccountOpening3', {
                paramKey: data
            })}
               style={[styles.signIn, {
                   borderColor: '#2074A4',
                   borderWidth: 1,
                   backgroundColor: '#fff',
                   marginTop: 15
               }]}
               >
                   <Text style={[styles.textSign, {
                   color: '#2074A4'
               }]}>Finish</Text>
               </TouchableOpacity>
            </View> 
            </Animatable.View>        
       
        </ImageBackground>
    );
};

export default AccountOpening3;

  

const height = Dimensions.get("window").height;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2074A4'
    // backgroundColor: 'rgba(0, 0, 205, 0.1)'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  footer:{
    flex: 3,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 250
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
  },
  
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center'
  },
  text_footer: {
      color: '#05375a',
      fontSize: 15
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginHorizontal: 12 /2
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop: 30
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    textSign: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});
