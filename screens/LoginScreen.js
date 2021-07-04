import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text, View, Image, TouchableOpacity, ActivityIndicator, ImageBackground, Dimensions, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import { TextInput } from 'react-native-gesture-handler'; 
import * as SecureStore from 'expo-secure-store';
import { base_url } from './Network';

const LoginScreen = ({navigation}) => {
    const [ saving, setSaving ] = React.useState(false); 
    const [data, setData] = React.useState({
      phonenumber: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true
    });

    React.useEffect(() => {
        getUsersDetails();
    }, [])
    
    const getUsersDetails =async () => {
        var data = await SecureStore.getItemAsync('user_details');
        if(data !== null){ 
            navigation.navigate('Dashboard');
        }
    }

    const numberInputChange = (val) =>{
        if (val.length === 11) {
            setData({
                ...data,
                phonenumber: val,
                check_numberInputChange: true
            });
        }
        else{
            setData({
                ...data,
                phonenumber: val,
                check_numberInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
            setData({
                ...data,
                password: val
            });
    }

    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    } 

    const submit = ()  => {  
        let _data = {
            phonenumber: data.phonenumber, 
            password: data.password
        } 
        console.log(_data);
        setSaving(true);
        var url = `${base_url}login`;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
            "Content-Type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(async (json) => {  
            // console.log(json);
            if(json.responseCode == '00'){
                alert('Login Successful!');
                await SecureStore.setItemAsync('user_details', JSON.stringify(json));
                navigation.navigate('Dashboard');
            }
            else if(json.responseCode == '05'){
                alert('User Not Found!');
            }
            else if(json.responseCode == '06'){
                alert('Wrong Password!');
            }
            else{
                alert('Ooops! An Error Occured!');
            }
        })
        .catch(err => console.log('Error: ', err))
        .finally(res => setSaving(false));
        
    }

    return(
        <View style={styles.container}>            
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/PAYSIL.png')}
                    style={styles.logo}
                    resizeMode="contain"
                    />
                <Text style= {styles.text_header}> Welcome Back! </Text>    
            </View>     
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.text_footer}> Phone Number </Text>   
                <View style={styles.action}>
                    <Feather
                        name = "user"
                        color= "#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter your phone"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>numberInputChange(val)}
                        keyboardType='numeric'
                        maxLength={11}
                    />
                    {data.check_numberInputChange ? 
                    <Feather
                        name="check-circle"
                        color="#2074A4"
                        size={20}
                    />
                    : null}
                </View> 

                <Text style={styles.text_footer, {marginTop: 35}}> Password </Text>   
                <View style={styles.action}>
                    <Feather
                        name = "lock"
                        color= "#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
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
                    <LinearGradient
                            colors={['#2074A4', '#01ab9d']} 
                            style={styles.signIn}
                        >   
                        <TouchableOpacity onPress={()=> submit()}>
                            {/* <Text style={styles.textSign, { color: '#fff' }}>Sign In</Text> */}
                            {
                                saving 
                                ?
                                    <ActivityIndicator color="#fff" size="small" />
                                : 
                                    <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
                            }
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity
                                onPress={()=>navigation.navigate('Register')}
                                style={[styles.signIn, {
                                    borderColor: '#2074A4',
                                    borderWidth: 1,
                                    backgroundColor: '#fff',
                                    marginTop: 15
                                }]}
                            > 
                            <Text style={[styles.textSign, { color: '#2074A4' }]}>Sign Up</Text> 
                    </TouchableOpacity>
                </View> 
            </Animatable.View>    
        </View>
    );
};

export default LoginScreen;

const { width, height} = Dimensions.get("window");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .1)'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40
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
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
  }, 
  text_header: {
      color: '#2074A4',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      top: 20
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
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
        fontSize: 12,
        fontWeight: 'bold'
    }
});
