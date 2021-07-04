import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, FlatList, ScrollView, ActivityIndicator, Image, TouchableOpacity, ImageBackground, Picker, Dimensions, Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import { Component } from 'react';
import { base_url } from './Network';

const RegisterScreen3  = ({navigation, route}) => {
    const [isLoading, setLoading] = React.useState(false); 
    const [ isLoadingLGA, setLoadingLGA] = React.useState(false); 
    const [ saving, setSaving ] = React.useState(false); 

    const [states, setStates] = React.useState([]); 
    const [lgas, setLgas] = React.useState([]); 
    const [business, setBusiness] = React.useState([]);

    const [state, setState] = React.useState('');

    const [lga, setLga] = React.useState('');

    const [biz, setBiz] = React.useState('');

    const [data, setData] = React.useState(route.params.paramKey2);
    
    useEffect(()  =>  {
        setLoading(true); 
        getAllStates();
        getAllBusinessCode();
    }, []);

    const getAllStates = async () => {
        var url = `${base_url}getStates`;
        fetch(url)
           .then(res => res.json())
           .then((json) => { 
                if(json.length > 0){
                    setStates(json);
                } 
            })
           .catch(err => console.log('Error getBusinessCode: ', err))
           .finally(() => setLoading(false));
    }

    const getAllBusinessCode = async () => {
        var url = `${base_url}getBusinessCode`;
        fetch(url)
           .then(res => res.json())
           .then((json) => { 
                if(json.length > 0){
                    setBusiness(json);
                } 
            })
           .catch(err => console.log('Error getBusinessCode: ', err))
           .finally(() => setLoading(false));
    } 

    const getLga = async (item) => {
        setLoadingLGA(true); 
        var url = `${base_url}getLgas`;
        fetch(url,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json;"
                },
                body: JSON.stringify({
                                        stateCode: item
                                    })
            })
           .then(res => res.json())
           .then((json) => { 
                if(json.length > 0){
                    setLgas(json);
                }
            })
           .catch(err => console.log('Error getLga: ', err))
           .finally(() => setLoadingLGA(false));
    } 

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                businessName: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ...data,
                businessName: val,
                check_textInputChange: false
            });
        }
    }

    const setSelectedLga = (val) => {
        setData({
            ...data,
            agentLga: val
        });
        console.log(val);
    }

    const setSelectedBiz = (val) => {
        setData({
            ...data,
            agentBusiness: val
        });
        console.log(val);
    }

    const textInputChange2 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                businessAddress: val,
                check_textInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                businessAddress: val,
                check_textInputChange2: false
            });
        }
    }

    const textInputChange3 = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                closesetLandmark: val,
                check_textInputChange3: true
            });
        }
        else{
            setData({
                ...data,
                closesetLandmark: val,
                check_textInputChange3: false
            });
        }
    }

    const dateChange = (val) => {
            setData({
                ...data,
                dob: val
            });
    }   

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
        setDate  (currentDate);
    };

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
                bvn: val,
                check_numberInputChange: true
            });
        }
        else{
            setData({
                ...data,
                bvn: val,
                check_numberInputChange: false
            });
        }
    }

    const numberInputChange2 = (val) =>{
        if (val.length === 11) {
            setData({
                ...data,
                tin: val,
                check_numberInputChange2: true
            });
        }
        else{
            setData({
                ...data,
                tin: val,
                check_numberInputChange2: false
            });
        }
    }

    const numberInputChange3 = (val) =>{
        if (val.length === 4) {
            setData({
                ...data,
                phone2: val,
                check_numberInputChange3: true
            });
        }
        else{
            setData({
                ...data,
                phone2: val,
                check_numberInputChange3: false
            });
        }
    } 

    const submit = ()  => {
        let _data = {
            business: data.agentBusiness, 
            bvn: data.bvn,
            businessAddress: data.businessAddress,
            businessName: data.businessName,
            landmark: data.closesetLandmark,
            dob: data.dob,
            emailAddress: data.email,
            firstName: data.firstname,
            gender: data.gender,
            lastName: data.lastname,
            localGovernmentCode: data.agentLga,
            middleName: data.middlename,
            password: data.password,
            phonenumber: data.phone,
            phonenumber2: data.phone2,
            taxIdentificationNumber: data.tin,
            transactionPin: data.transactionpin,
            username: data.username,
            agentAddress: data.address
        }   

        setSaving(true);
        console.log("data to send: ", _data);
        var url = `${base_url}createNewAgent`;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then((json) => {  
            console.log(json);
            if(json.responseCode == '00'){
                alert('Registration Successful! Please Login...');
                navigation.navigate('Login');
            }
            else if(json.responseCode == '21'){
                alert('User Already Exist!');
            }
                else if(json.responseCode == '01'){
                alert('Error Saving User!');
            }
            else if(json.responseCode == '96'){
                alert('An unexpected error occured! Try again');
            }
        })
        .catch(err => console.log('Error: ', err))
        .finally(res => setSaving(false) ); 
    }

    
    return( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/PAYSIL.png')}
                    style={styles.logo}
                    resizeMode="contain"
                    />
                <Text style= {styles.text_header}> Register! </Text>    
            </View>      
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false} > 
                    <Text style={styles.text_footer}>Business Name </Text>   
                    <View style={styles.action}>
                        <Feather
                                name = "map"
                                color= "#05375a"
                                size={18}
                            />
                        <TextInput
                                placeholder="Enter your business name"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val)=>textInputChange(val)}
                            />
                            {data.check_textInputChange ? 
                            <Feather
                                name="check-circle"
                                color="#2074A4"
                                size={18}
                            />
                            : null}
                    </View>

                    <Text style={styles.text_footer}>Business Address </Text>   
                    <View style={styles.action}>
                        <Feather
                            name = "home"
                            color= "#05375a"
                            size={18}
                        />
                        <TextInput
                                placeholder="Enter your business address"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val)=>textInputChange2(val)}
                            />
                            {data.check_textInputChange2 ? 
                            <Feather
                                name="check-circle"
                                color="#2074A4"
                                size={18}
                            />
                            : null}
                    </View>
        
                    <Text style={styles.text_footer, {marginTop: 5}}>Closest Landmark </Text>   
                    <View style={styles.action}>
                        <Feather
                            name = "bank"
                            color= "#05375a"
                            size={18}
                            />
                        <TextInput
                                placeholder="Enter closest landmark to your address"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val)=>textInputChange3(val)}
                            />
                            {data.check_textInputChange3 ? 
                            <Feather
                                name="check-circle"
                                color="#2074A4"
                                size={18}
                            />
                            : null}
                    </View>


                    <Text style={styles.text_footer, {marginTop: 5}}> State </Text>  
                    <View style={styles.action, {  }}>
                        {isLoading ? <ActivityIndicator color="#000" size="small" /> : (      
                        <Picker
                                selectedValue={state}
                                onValueChange={(itemValue, itemIndex) => {setState(itemValue); getLga(itemValue); }}
                                itemStyle={{
                                    justifyContent: 'flex-start', 
                                    borderColor: 'white',
                                    backgroundColor: 'white', height: 40,
                                }}
                                style={{ height: 40 }}
                                dropDownStyle={{backgroundColor: '#fafafa',}}>  
                                {states.map((item, itemIndex) => {
                                return (<Picker.Item label={item.stateName} value={item.stateCode} key={itemIndex}/>) 
                            })} 
                        </Picker> )} 
                    </View>

                    <Text style={styles.text_footer}> LGA </Text>  
                        {isLoadingLGA ? <ActivityIndicator color="#000" size="small" /> : (      
                        <Picker
                                selectedValue={data.agentLga}
                                onValueChange={(itemValue, itemIndex) => setSelectedLga(itemValue)}
                                itemStyle={{
                                    justifyContent: 'flex-start', 
                                    borderColor: 'white',
                                    backgroundColor: 'white'
                                }}
                                dropDownStyle={{backgroundColor: '#fafafa'}}>  
                                {lgas.map((item, itemIndex) => {
                                return (<Picker.Item label={item.lgaName} value={item.lgacode} key={itemIndex}/>) 
                            })} 
                        </Picker> )}

                    <Text style={styles.text_footer}> Business Type </Text>  
                    {isLoading ? <ActivityIndicator color="#000" size="small" /> : (      
                    <Picker
                            selectedValue={data.agentBusiness}
                            onValueChange={(itemValue, itemIndex) => setSelectedBiz(itemValue)}
                            itemStyle={{
                                justifyContent: 'flex-start', 
                                borderColor: 'white',
                                backgroundColor: 'white'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}> 
                            {/* {states.map((myValue)=>{ ( <Picker.Item label={myValue.stateName} value={myValue.stateCode} key={myValue.stateCode} />
                        )})} */}
                        {business.map((item, itemIndex) => {
                        return (<Picker.Item label={item.businessName} value={item.businessCode} key={itemIndex}/>) 
                    })}
                    {/* {serviceItems} */}
                    </Picker> )}

                    <Text style={styles.text_footer}>BVN </Text>   
                    <View style={styles.action}>
                        <Feather
                            name = "lock"
                            color= "#05375a"
                            size={18}
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
                            size={18}
                        />
                        : null}
                    </View> 

                    <Text style={styles.text_footer}>TIN </Text>   
                    <View style={styles.action}>
                        <FontAwesome
                            name = "lock"
                            color= "#05375a"
                            size={18}
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
                            size={18}
                        />
                        : null}
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
                                {
                                    saving 
                                    ?
                                        <ActivityIndicator color="#000" size="small" /> 
                                    :
                                        <Text style={[styles.textSign, { color: '#2074A4' }]}>Register</Text>
                                }
                        </TouchableOpacity>
                    </View> 
                </ScrollView>
            </Animatable.View>   
        </View>
    );
};
export default RegisterScreen3;

  
const { width, height} = Dimensions.get("window");
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
