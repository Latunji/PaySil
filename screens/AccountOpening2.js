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


const AccountOpening2  = ({navigation, route}) => {

    const [state, setState] = React.useState('');

    const [lga, setLga] = React.useState('');
    // const [selectedValue, setSelectedValue] = React.useState('');

    const [data, setData] = React.useState({
      email: route.params.paramKey.email,
      firstname: route.params.paramKey.firstname,
      lastname: route.params.paramKey.lastname,
      middlename: route.params.paramKey.middlename,
      username: route.params.paramKey.username,
      bank: route.params.paramKey.bank,
      dob: '',
      houseNumber: '',
      lgaCode: '',
      streetName: '',
      city: '',
      gender: '',
      bvn: '',
      check_textInputChange: false,
      check_numberInputChange: false,
      check_numberInputChange2: false,
      secureTextEntry: true,
      secureTextEntry2: true,
      secureTextEntry3: true
    });


    const [states, setStates] = React.useState({
        st: null,
        red: [{"stateCode":"1","stateName":"Federal Capital Territory"},{"stateCode":"2","stateName":"Abia"},{"stateCode":"3","stateName":"Adamawa"},
        {"stateCode":"4","stateName":"Akwa Ibom"},{"stateCode":"5","stateName":"Anambra"},{"stateCode":"6","stateName":"Bauchi"},
        {"stateCode":"7","stateName":"Bayelsa"},{"stateCode":"8","stateName":"Benue"},{"stateCode":"9","stateName":"Bornu"},
        {"stateCode":"10","stateName":"Cross River"},{"stateCode":"11","stateName":"Delta"},{"stateCode":"12","stateName":"Ebonyi"},
        {"stateCode":"13","stateName":"Edo"},{"stateCode":"14","stateName":"Ekiti"},{"stateCode":"15","stateName":"Enugu"},{"stateCode":"16","stateName":"Gombe"},{
            "stateCode":"17","stateName":"Imo"},{"stateCode":"18","stateName":"Jigawa"},{"stateCode":"19","stateName":"Kaduna"},{"stateCode":"20","stateName":"Kano"},
            {"stateCode":"21","stateName":"Katsina"},{"stateCode":"22","stateName":"Kebbi"},{"stateCode":"23","stateName":"Kogi"},{"stateCode":"24","stateName":"Kwara"},
            {"stateCode":"25","stateName":"Lagos"},{"stateCode":"26","stateName":"Nasarawa"},{"stateCode":"27","stateName":"Niger"},{"stateCode":"28","stateName":"Ogun"},
            {"stateCode":"29","stateName":"Ondo"},{"stateCode":"30","stateName":"Osun"},{"stateCode":"31","stateName":"Oyo"},{"stateCode":"32","stateName":"Plateau"},
            {"stateCode":"33","stateName":"Rivers"},{"stateCode":"34","stateName":"Sokoto"},{"stateCode":"35","stateName":"Taraba"},{"stateCode":"36","stateName":"Yobe"},
            {"stateCode":"37","stateName":"Zamfara"}],
         });

    const [lgas, setLgas] = React.useState({
            st: null,
            red: [
                {"lgaCode":"1","lgaName":"Gwagwalada"},{"lgaCode":"2","lgaName":"Kuje"},{"lgaCode":"3","lgaName":"Abaji"},
                    {"lgaCode":"4","lgaName":"Abuja Municipal"},{"lgaCode":"5","lgaName":"Bwari"},{"lgaCode":"6","lgaName":"Kwali"}]
             });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                streetName: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ...data,
                streetName: val,
                check_textInputChange: false
            });
        }
    }

    const setSelectedLga = (val) => {
        setData({
            ...data,
            agentLga: val
        });
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
        if (val.length === 3) {
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

    const numberInputChange2 = (val) =>{
        if (val.length === 11) {
            setData({
                ...data,
                bvn: val,
                check_numberInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                bvn: val,
                check_numberInputChange2: false
            });
        }
    }

    const textInputChange3 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                city: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ...data,
                city: val,
                check_textInputChange: false
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
            
            <Text style={styles.text_footer}>Street Name </Text>   
            <View style={styles.action}>
                <Feather
                name = "home"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your street name"
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

        
            <Text style={styles.text_footer}>House Number </Text>   
            <View style={styles.action}>
                <Feather
                name = "home"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter house number"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType='numeric'
                maxLength={3}
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

            <Text style={styles.text_footer, {marginTop: 5}}> State </Text>  
            <Picker
            selectedValue={state}
            onValueChange={(itemValue, itemIndex) => setState(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start', 
            borderColor: 'white',
            backgroundColor: 'white'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}> 
           {states.red.map((item, itemIndex) => {
        return (<Picker.Item label={item.stateName} value={item.stateCode} key={itemIndex}/>) 
    })}
                {/* {serviceItems} */}
            </Picker> 

            <Text style={styles.text_footer}> LGA </Text>      
            <Picker
            selectedValue={data.agentLga}
            onValueChange={(itemValue, itemIndex) => setSelectedLga(itemValue)}
            itemStyle={{
            justifyContent: 'flex-start', 
            borderColor: 'white',
            backgroundColor: 'white'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}> 
           {lgas.red.map((item, itemIndex) => {
        return (<Picker.Item label={item.lgaName} value={item.lgaCode} key={itemIndex}/>) 
    })}
                {/* {serviceItems} */}
            </Picker> 

            <Text style={styles.text_footer}>City </Text>   
            <View style={styles.action}>
                <Feather
                name = "home"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your city"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange3(val)}
                />
                {data.check_textInputChange ? 
                <Feather
                name="check-circle"
                color="#2074A4"
                size={20}
                />
                : null}
            </View> 


            <Text style={styles.text_footer}>Bvn </Text>   
            <View style={styles.action}>
                <Feather
                name = "key"
                color= "#05375a"
                size={20}
                />
                <TextInput
                placeholder="Enter your bvn"
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

            <View style={styles.button, {marginTop: 12}}>

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
               }]}>Next >>></Text>
               </TouchableOpacity>
            </View> 
            </Animatable.View>        
       
        </ImageBackground>
    );
};

export default AccountOpening2;

  

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
