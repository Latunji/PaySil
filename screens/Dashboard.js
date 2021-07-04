import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Feather from 'react-native-vector-icons/Feather'; 
import { SafeAreaView, StyleSheet, Button, Text,Modal, View, Image, TouchableOpacity, Dimensions, Alert, Platform, ImageBackground, ActivityIndicator } from 'react-native';
import Animated from 'react-native-reanimated'; 
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as SecureStore from 'expo-secure-store';
import moment from 'moment';
import { base_url } from './Network';

const Dashboard = ({navigation}) => { 
    const [ loading, setLoading ] = useState(false); 
    const [ userDetails, setUserDetails ] = useState([]); 
    const [ totalOpeningBalance, setTotalOpeningBalance ] = useState(0);
    useEffect( () => {
        setLoading(true);
        getUsersDetails();
        // navigation.addListener('beforeRemove', (e) => { 
        //     // Prevent default behavior of leaving the screen
        //     e.preventDefault();    
        //     // Prompt the user before leaving the screen
        //     Alert.alert(
        //       'Logout',
        //       'Are you sure to logout', 
        //       [
        //         { text: "Don't leave", style: 'cancel', onPress: () => {} },
        //         {
        //           text: 'Logout',
        //           style: 'destructive',
        //           // If the user confirmed, then we dispatch the action we blocked earlier
        //           // This will continue the action that had triggered the removal of the screen
        //           onPress: async () => { await SecureStore.deleteItemAsync('user_details'); navigation.dispatch(e.data.action) },
        //         },
        //       ]
        //     );
        //   })
    } , [navigation] );
    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height; 
    
    const getUsersDetails =async () => {
        var data = await SecureStore.getItemAsync('user_details');
        if(data !== null){
            setUserDetails(JSON.parse(data));
            setLoading(false);
            getMyTotalOpeningBalance(data.agentCode)
        }else{
            navigation.navigate('Login');
        }
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync('user_details');
        navigation.navigate('Login');
    }
 
    const getMyTotalOpeningBalance = async (agentId) => {
        setLoading(true); 
        var url = `${base_url}getTotalOpeningBalance`;
        fetch(url,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json;"
                },
                body: JSON.stringify({
                                        agentCode: agentId
                                    })
            })
           .then(res => res.json())
           .then((json) => { 
               console.log(json);
               setTotalOpeningBalance(json.totalOpeningBalance) 
            })
           .catch(err => console.log('Error getLga: ', err))
           .finally(() => setLoading(false));
    } 

    if(loading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
                <ActivityIndicator color="#000" size="large" />
            </View>
        )
    }

    return(
        <View  style={styles.container}> 
            <View style={{
                    flexDirection:"row",
                    marginTop: 40,
                    alignItems: "center",
                    justifyContent: 'space-between',
                    padding: 20
                }}>
                {/* <Icon name="menu" size={20} color="#000"  /> */}
                <AntDesign name="logout" size={24} color="black" onPress={() => logout() } />
                {/* <Icon name="account-circle" size={33} color="#000" style={{marginLeft: deviceWidth * 0.8}} /> */}
                <Feather name="users" size={20} color="#000" onPress={() => navigation.navigate('AllRegistredMember') } />
            </View>

            <View style={{paddingHorizontal: 20, marginTop:15}}>
                <Text style={{
                        fontSize: 25,
                        color: "#000"
                    }}> 
                    Hello { userDetails.fullname }!
                </Text>
                <Text  style={{
                        marginTop: 10,
                        fontSize: 14,
                        color: "#000",
                        alignSelf: 'flex-end',
                        fontStyle: 'italic',
                        right: 10,
                    }}>Your total opening balance: {totalOpeningBalance}</Text>
            
                <View style={{ paddingHorizontal: deviceWidth * 0.05}}> 
                    <TouchableOpacity style={ styles.card } onPress={()=> navigation.navigate('AccountOpening1')}>
                        <View >
                            <Image 
                                source={require('../assets/images/kyc.png')}
                                style={{height:84, width:84}}
                            />
                        </View>
                        <Text style={{
                                color: "#000",
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                            Account Opening
                        </Text>
                    </TouchableOpacity>

                    <View style={ styles.card }>
                        <Image 
                            source={require('../assets/images/kyc.png')}
                            style={{height:84, width:84}}
                        />
                        <Text style={{
                                color: "#000",
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                            Fund Transfer
                        </Text>
                    </View>

                    <View style={ styles.card }>
                        <Image 
                            source={require('../assets/images/kyc.png')}
                            style={{height:84, width:84}}
                        />
                        <Text style={{
                                color: "#000",
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                            Bills Payment
                        </Text>
                    </View>
                    
                </View> 
                
            </View>
    
        </View>   
    )
}


export default Dashboard;

const { width, height} = Dimensions.get("window");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // backgroundColor: 'rgba(0, 0, 205, 0.1)'
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#05375a',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 20
    }, 
    card:{
        width: width / 1.5,
        height: 150,
        alignItems: "center",
        justifyContent: "space-around", 
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 5,
        marginTop: 40
    },
});

const modalStyles = StyleSheet.create({
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
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
      flexDirection: 'row'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    flex: 1,
    paddingLeft: 10,
    borderWidth: 1
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