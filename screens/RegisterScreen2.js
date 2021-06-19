import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Modal from 'react-native-modal';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TouchableOpacity, ImageBackground, Picker, Dimensions, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import { Component } from 'react';


const RegisterScreen2  = ({navigation, route}) => {


    // const [selectedValue, setSelectedValue] = React.useState('');

    const [data, setData] = React.useState({
      email: route.params.paramKey.email,
      firstname: route.params.paramKey.firstname,
      lastname: route.params.paramKey.lastname,
      middlename: route.params.paramKey.middlename,
      username: route.params.paramKey.username,
      password: route.params.paramKey.password,
      dob: '',
      phone: '',
      phone2: '',
      address: '',
      transactionpin: '',
      gender: '',
      check_textInputChange: false,
      secureTextEntry: true,
      secureTextEntry2: true,
      secureTextEntry3: true
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                address: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ...data,
                address: val,
                check_textInputChange: false
            });
        }
    }

    const dateChange = (val) => {
        console.log(moment(val).format().toString());
            setData({
                ...data,
                dob: moment(val).format().toString()
            });
    }

    const setGender = (val) => {
            setData({
                ...data,
                gender: val
            });
            console.log(val);
    }
   

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
        setDate  (currentDate);
      };

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
        if (val.length === 11) {
            setData({
                ...data,
                phone: val,
                check_numberInputChange: true
            });
        }
        else{
            setData({
                ...data,
                phone: val,
                check_numberInputChange: false
            });
        }
    }

    const numberInputChange2 = (val) =>{
        if (val.length === 11) {
            setData({
                ...data,
                phone2: val,
                check_numberInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                phone2: val,
                check_numberInputChange2: false
            });
        }
    }

    const numberInputChange3 = (val) =>{
        if (val.length === 4) {
            setData({
                ...data,
                transactionpin: val,
                check_numberInputChange3: true
            });
        }
        else{
            setData({
                ...data,
                transactionpin: val,
                check_numberInputChange3: false
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
            <Text style= {styles.text_header}> Register! </Text>    
            </View>            

            <Animatable.View
             animation="fadeInUpBig"
             style={styles.footer}>


            <Text style={styles.text_footer, {marginTop: 5}}> Date Of Birth </Text>   
            <View style={{marginHorizontal: 1}}>
            <CustomDatePicker
            textStyle = {{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderColor: 'gray',
                borderRadius: 9,
                borderWidth: 1,
            }}
            defaultDate="1985-01-01"
            onDateChange={(value) => dateChange(value)} />
            </View>


            <Text style={styles.text_footer, {marginTop: 5}}> Gender </Text>   
            <Picker
            selectedValue = {data.gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start',
            borderColor: 'white',
            backgroundColor: 'white'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}>
                <Picker.Item label="- Select Gender -" value="" />
                 <Picker.Item label="Male" value="1" />
                <Picker.Item label="Female" value="2" />
            </Picker>
            
            <Text style={styles.text_footer}>Address </Text>   
            <View style={styles.action}>
                <Feather
                name = "user"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your address"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 

        

            <Text style={styles.text_footer}>Phone Number 1 </Text>   
            <View style={styles.action}>
                <Feather
                name = "phone"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter phone line 1"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType='numeric'
                maxLength={11}
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

            <Text style={styles.text_footer}>Phone Number 2 </Text>   
            <View style={styles.action}>
                <FontAwesome
                name = "phone"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter line 2"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType='numeric'
                maxLength={11}
                onChangeText={(val)=>numberInputChange2(val)}
                />
                {data.check_numberInputChange2 ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 

            <Text style={styles.text_footer}> Transaction Pin </Text>   
            <View style={styles.action}>
                <Feather
                name = "lock"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your pin"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>numberInputChange3(val)}
                keyboardType='numeric'
                maxLength={4}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                <FontAwesome
                name = "eye-off"
                color= "grey"
                size={20}
                />
                :
                <FontAwesome
                name = "eye"
                color= "grey"
                size={20}
                />
                }
                </TouchableOpacity>
            </View> 

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
                   <Text style={[styles.textSign, {
                   color: '#2074A4'
               }]}>Next >>></Text>
               </TouchableOpacity>
            </View> 
            </Animatable.View>        
       
        </ImageBackground>
    );
};

export default RegisterScreen2;

  

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
