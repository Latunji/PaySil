import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TouchableOpacity, ImageBackground, Picker, Dimensions, ActivityIndicator, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import * as ImagePicker from 'expo-image-picker';
import { Component } from 'react'; 
import * as SecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';
import { base_url } from './Network';

const AccountOpening3  = ({navigation, route}) => {
    const [ isLoading, setLoading ] = React.useState(false); 
    const [ submitting, setSubmitting ] = React.useState(false);  
    const [ data, setData ] = React.useState(JSON.parse(route.params.paramKey2)); 
    const [ image, setImage ] = React.useState('');
    const [ signature, setSignature ] = React.useState('');
    const [ userDetails, setUserDetails ] = useState([]);

    useEffect(() => {
      setLoading(true);
      setSubmitting(false);
      getUsersDetails();
      (async () => { 
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, [])
    
    const getUsersDetails =async () => {
        var data = await SecureStore.getItemAsync('user_details');
        if(data !== null){
            setUserDetails(JSON.parse(data));
            setLoading(false); 
        }else{
            navigation.navigate('Login');
        }
    }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [6, 6],
        quality: 1,
        base64: true,
      }); 
      // console.log(result);
      if (!result.cancelled) {
        setImage(result.base64);
      }
    };

    const pickSignature = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [6, 6],
        quality: 1,
        base64: true,
      }); 
      // console.log(result);
      if (!result.cancelled) {
        setSignature(result.base64);
      }
    };

    const submit = async ()  => { 

        // const user_image = "file:///" + image.split("file:/").join("");
        // const new_user_image_base64 = image; // await FileSystem.readAsStringAsync(user_image, { encoding: FileSystem.EncodingType.Base64 });
        //                 //  { 
        //                 //       uri : user_image,
        //                 //       type: 'image/jpeg',
        //                 //       name: user_image.split("/").pop()
        //                 //   }  
        // // const user_signature = "file:///" + signature.split("file:/").join("");
        // const new_usersignature_base64 = signature; // await FileSystem.readAsStringAsync(user_signature, { encoding: FileSystem.EncodingType.Base64 });
        // // var new_usersignature = { 
        // //                       uri : user_signature,
        // //                       type: 'image/jpeg',
        // //                       name: user_signature.split("/").pop()
        //                   }  
        var data_new = {
            "agentCode": '013001', //userDetails.agentCode,
            "bankCode": '000013', //data.bankCode,
            "bvn": data.bankVerificationNumber,
            "firstName": data.firstName,
            "middleName": data.middleName,
            "lastName": data.lastName,
            "gender": data.gender,
            "dob": data.dob,
            "houseNumber": data.houseNumber,
            "streetName": data.streetName,
            "city":  data.city,
            "lgaCode": data.lgaCode,
            "emailAddress":  data.emailAddress,
            "phoneNumber": data.phoneNumber,
            "customerImage": `${image}`,
            "customerSignature":  `${signature}`, 
            "accountOpeningBalance": Number(data.accountOpeningBalance)
        }          
        
        // console.log(data_new); 
        // return true;
        setSubmitting(true)
         var url = `${base_url}createAccount`;
         fetch(url, {
             method: "POST",
             body: JSON.stringify(data_new),
             headers: {
              "Content-Type": "application/json; charset=UTF-8"
              }
            })
            .then(res => res.json())
            .then((json) => {  
              // console.log(json);
              if(json.responseCode == '00'){
                  alert('Customer Creation Successful!');
                  // navigation.navigate('Login');
              }else{
                alert(json.responseDescription)
              }
              // else if(json.responseCode == '02'){
              //     alert('Email Already Exist!');
              // }
              // else if(json.responseCode == '03'){
              //     alert('Phone Number Has Been Used!');
              // }
              // else if(json.responseCode == '99'){
              //   alert('Invalid Image detected! Max upload size is 15kb');
              // }
            })
            .catch(err => console.log('Error: ', err))
            .finally(err => setSubmitting(false));
        
    }   

    if(isLoading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
                <ActivityIndicator color="#000" size="large" />
            </View>
        )
    }

    return(
        // <View style={styles.container}>
        <View style={styles.container} >
            <View style={styles.header}>
              <Image
                  source={require('../assets/images/PAYSIL.png')}
                  style={styles.logo}
                  resizeMode="contain"
                  />
              <Text style= {styles.text_header}> Account Opening </Text>    
            </View>            

            <Animatable.View animation="fadeInUpBig" style={styles.footer}> 
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
                        value={data.accountOpeningBalance}
                        onChangeText={(val)=> setData({ ...data, accountOpeningBalance: val })}
                    /> 
                </View> 
    
                <TouchableOpacity 
                    onPress={()=> pickImage()}
                    >
                    <View
                      style={{
                        height: 150,
                        width: '100%',
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginVertical: 10,
                      }}>
                      <ImageBackground
                          source={{
                            uri: 'data:image/jpg;base64,'+image,
                          }}
                          resizeMode="contain"
                          style={{height: '100%', width: '100%'}}
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
                            size={30}
                            color="#000"
                            style={{
                              opacity: 0.7,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderWidth: 1,
                              borderColor: '#000',
                              borderRadius: 10,
                              top: 10 
                            }}
                          />
                        </View>
                      </ImageBackground>
                    </View>
                </TouchableOpacity>
    
                <TouchableOpacity
                  onPress={()=> pickSignature()}
                  >
                  <View
                    style={{
                        height: 150,
                        width: '100%',
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                    <ImageBackground
                        source={{
                          uri: 'data:image/jpg;base64,'+signature,
                        }}
                        resizeMode="contain"
                        style={{height: '100%', width: '100%'}}
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
                            size={30}
                            color="#000"
                            style={{
                              opacity: 0.7,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderWidth: 1,
                              borderColor: '#000',
                              borderRadius: 10,
                              top: 10
                          }}
                        />
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
      
                <View style={styles.button}>
                  <TouchableOpacity
                        onPress={()=> submit()}
                        style={[styles.signIn, {
                            borderColor: '#2074A4',
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            marginTop: 15
                        }]}
                      >
                        {
                          submitting 
                          ?
                          <ActivityIndicator color="#000" size="small" />
                          : 
                          <Text style={[styles.textSign, { color: '#2074A4' }]}>Finish</Text>
                        }
                  </TouchableOpacity>
                </View> 
            </Animatable.View>        
       
        </View>
    );
};

export default AccountOpening3;

const height = Dimensions.get("window").height;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .1)'
        // backgroundColor: 'rgba(52, 52, 52, 0.3)'
    },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  footer:{
    flex: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    alignSelf: 'center',
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingVertical: 40,
    // marginLeft: 10,
    // marginRight: 10,
    // marginBottom: 150,
    // paddingHorizontal: 30
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.3)',
      paddingBottom: 5,
      marginVertical: 10,
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      
  }, 
  text_header: {
        color: '#2074A4',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        top: 10
  },
  text_footer: {
      color: '#05375a',
      fontSize: 15
  },
  logo: {
    width: 80,
    height: 100,
    // marginHorizontal: 12 /2
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
        fontSize: 15,
        fontWeight: 'bold'
    }
});
