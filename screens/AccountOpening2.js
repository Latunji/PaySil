import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Modal from 'react-native-modal';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Picker, ActivityIndicator, Dimensions, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import { Component } from 'react';
import { base_url } from './Network';


const AccountOpening2  = ({navigation, route}) => {
    const [isLoading, setLoading] = React.useState(false); 
    const [states, setStates] = React.useState([]);
    const [ loadingLGA, setLoadingLGA ] = React.useState(false); 
    const [ myState, setMyState ] = React.useState(''); 
    const [lgas, setLgas] = React.useState([]); 

    const [data, setData] = React.useState(route.params.paramKey); 
  
    useEffect(()  =>  {
        setLoading(true); 
        getAllStates(); 
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

    const submit = ()  => { 
        if(data.bankVerificationNumber == "" || 
            data.gender == "" ||  
            data.dob == "" || 
            data.houseNumber == "" || 
            data.city == "" || 
            data.lgaCode == "" || 
            data.streetName == "" ){
            console.log(data)
            alert('All feilds are required');
            return false;
        }
        navigation.navigate('AccountOpening3', {
            paramKey2: JSON.stringify(data)
        }); 
    } 

    if(isLoading){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color="#000" size="large" />
            </View>
        )
    }

    return(
        // <View style={styles.container}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/PAYSIL.png')}
                    style={styles.logo}
                    resizeMode="contain"
                    />
                <Text style= {styles.text_header}> Account Opening </Text>    
            </View>      
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>       
                <ScrollView showsVerticalScrollIndicator={false}> 
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
                            onDateChange={(value) => setData({ ...data, dob : value }) } />
                    </View>
        
                    <Text style={styles.text_footer, {marginTop: 5}}> Gender </Text>   
                    <Picker
                        selectedValue = {data.gender}
                        onValueChange={(itemValue, itemIndex) =>  setData({ ...data, gender : itemValue }) }
                        itemStyle={{
                            justifyContent: 'flex-start',
                            borderColor: 'white',
                            backgroundColor: 'white'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}>
                        <Picker.Item label="- Select Gender -" value="" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
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
                            value={data.streetName}
                            onChangeText={(val)=> setData({ ...data, streetName : val })}
                        /> 
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
                            value={data.houseNumber}
                            onChangeText={(val)=> setData({ ...data, houseNumber : val })}
                        /> 
                    </View> 

                    <Text style={styles.text_footer, {marginTop: 5}}> State </Text>  
                    <Picker
                        selectedValue={myState}
                        onValueChange={(itemValue, itemIndex) =>{ getLga(itemValue); setMyState(itemValue);  } }
                        itemStyle={{
                            justifyContent: 'flex-start', 
                            borderColor: 'white',
                            backgroundColor: 'white'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}> 
                        {  states.map((item, itemIndex) => {
                            return (<Picker.Item label={item.stateName} value={item.stateCode} key={itemIndex}/>) 
                        })} 
                    </Picker> 

                    <Text style={styles.text_footer}> LGA </Text>  
                    {
                        loadingLGA 
                        ?
                        <ActivityIndicator color="#000" size="small" />
                        : 
                        <Picker
                            selectedValue={data.agentLga}
                            onValueChange={(itemValue, itemIndex) => setData({ ...data, lgaCode : itemValue }) }
                            itemStyle={{
                                justifyContent: 'flex-start', 
                                borderColor: 'white',
                                backgroundColor: 'white'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}> 
                            { lgas.map((item, itemIndex) => {
                                return (<Picker.Item label={item.lgaName} value={item.lgacode} key={itemIndex}/>) 
                            })} 
                        </Picker> 
                    }    

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
                            value={data.city}
                            onChangeText={(val)=> setData({ ...data, city : val })}
                        /> 
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
                            value={data.bankVerificationNumber}
                            onChangeText={(val)=> setData({ ...data, bankVerificationNumber : val })}
                        /> 
                    </View> 

                    <View style={styles.button, {marginTop: 12}}>
                        <TouchableOpacity
                                onPress={()=> submit() }
                                style={[styles.signIn, {
                                    borderColor: '#2074A4',
                                    borderWidth: 1,
                                    backgroundColor: '#fff',
                                    marginTop: 15
                                }]}
                                >
                            <Text style={[styles.textSign, { color: '#2074A4' }]}>Continue</Text>
                        </TouchableOpacity>
                    </View>        
                </ScrollView>
            </Animatable.View> 
        </View>
    );
};

export default AccountOpening2;
 
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
