import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import CustomDatePicker from '../routes/datePicker';
import * as Animatable from 'react-native-animatable'; 
import FontAwesome from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Button, Text,Modal, View, Image, TouchableOpacity, Dimensions, Alert, Platform, ImageBackground, ActivityIndicator } from 'react-native';
import Animated from 'react-native-reanimated'; 
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as SecureStore from 'expo-secure-store';
import moment from 'moment';
import { base_url } from './Network';

const AllRegistredMember = ({navigation}) => { 
    const [ loading, setLoading ] = useState(false); 
    const [ userDetails, setUserDetails ] = useState([]); 
    const [ allRegistredMember, setAllRegistredMember ] = useState([]);
    useEffect( () => {
        setLoading(true);
        getUsersDetails(); 
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

    const getMyTotalOpeningBalance = async (agentId) => {
        setLoading(true); 
        var url = `${base_url}getRegisteredAccounts`;
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
            //    setAllRegistredMember(json.totalOpeningBalance) 
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
                <Icon name="arrow-back" size={20} color="#000" onPress={() => navigation.goBack() } /> 
            </View>

            <View style={{paddingHorizontal: 20, marginTop:15}}>
                <Text style={{
                        fontSize: 20,
                        color: "#000"
                    }}> 
                    All registered member
                </Text>    
            </View> 

            <ScrollView style={{ width: '100%', height: '100%' }}>
                <View style={styles.listCon}>
                    <Text style={styles.listConText}>Adebayo Adekola</Text>
                </View>
            </ScrollView>     

        </View>   
    )
}
 
export default AllRegistredMember;

const { width, height} = Dimensions.get("window");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // backgroundColor: 'rgba(0, 0, 205, 0.1)'
    }, 
    listCon:{
      width: '90%', 
      height: 40,
      padding: 10, 
      backgroundColor: 'rgba(0, 0, 0, 0.07)',
      borderRadius: 4,
      justifyContent: 'center',
      elevation: 1,
      alignSelf: 'center',
      marginVertical: 10
    },
    listConText:{
      color: '#000',
      fontSize: 14, 
      fontWeight: 'bold'
    }
});
 