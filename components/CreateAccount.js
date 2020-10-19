import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert,ToastAndroid} from 'react-native';
import { addNewUser } from '../dataBase/LoginService';

const COLOR_ACCENT = '#5f259f';
const COLOR_ACCENT_LIGHT = '#b3dcff';
const COLOR_ACCENT_LIGHT2 = '#168eea';
const COLOR_WHITE = 'white';
const COLOR_BLACK = '#000000';
const COLOR_LIGHT_BLACK = '#7f7f7f';
const COLOR_LIGHT_WHITE = '#B2B2B2';
const COLOR_LIGHT_WHITE1 = '#f2f6fa';

const UserDetails=[
  {
    id:'1',
    userName:'ABC',
    passwor:'123'
  },
  {
    id:'1',
    userName:'ABC',
    passwor:'123'
  },
]

const LoginDetails = [
    {
        id: '1',
        userName: 'ABC',
        password: '1234'
    },
    {
        id: '2',
        userName: 'ABd',
        password: '1221'
    },
]

const CreatAccount = ({navigation}) => {
  
  const incorrectPassword=()=>{
    ToastAndroid.show("Password can't match !",ToastAndroid.SHORT)
  }
  const fillAllDetials=()=>{
    ToastAndroid.show("Plese fill all Detials",ToastAndroid.SHORT)
  }
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isSucessful, setIsSucessful] = useState(false)
  
  const customerData ={
    userName: userName,
    password: password,
    reenterdPassword: rePassword,
  };



  return (
    <View style={{ backgroundColor: COLOR_ACCENT_LIGHT,flex:1}}>
          <View style={{
        alignItems: 'center',
        justifyContent: 'center',
       
        flex: 1,
      }}>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10%',
        }}>
        <View style={{marginBottom: '20%'}}>
          <Text
            style={{
              letterSpacing: 5,
              fontSize: 40,
              color: COLOR_ACCENT,
              fontWeight: 'bold',
            }}>
            Create Account
          </Text>
        </View>
        <View style={{marginBottom: '10%', alignItems: 'center', width: '100%'}}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLOR_ACCENT,
              flexDirection:'row',
              alignItems:'center'
            }}>
               
            <TextInput
             placeholder="User Name"
             value={userName}
             autoCapitalize='words'
              onChangeText={(val)=> setUserName(val)}
              placeholderTextColor={COLOR_BLACK}
              fontSize={18}
              style={{color: COLOR_BLACK,width:'70%'}}/>
          </View>
        </View>
        <View style={{marginBottom: '10%', alignItems: 'center', width: '100%'}}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLOR_ACCENT,
              flexDirection:'row',
              alignItems:'center'
            }}>
               
            <TextInput
             placeholder="Password"
             value={password}
             autoCapitalize='none'
            onChangeText={(val)=> setPassword(val)}
              placeholderTextColor={COLOR_BLACK}
              fontSize={18}
              style={{color: COLOR_BLACK,width:'70%'}}/>
          </View>
        </View>
        <View style={{marginBottom: '10%', alignItems: 'center', width: '100%'}}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLOR_ACCENT,
              flexDirection:'row',
              alignItems:'center'
            }}>
            <TextInput
            placeholder="Confirm Password"
            value={rePassword}
            autoCapitalize='none'
            onChangeText={(val)=> setRePassword(val)}
              placeholderTextColor={COLOR_BLACK}
              fontSize={18}
              style={{color: COLOR_BLACK,width:'70%'}}/>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          
          if(userName=="" || password=="" || rePassword==""){
           fillAllDetials()
          }else {if(
            password!=rePassword
          ){
            incorrectPassword()
          }else {
            setIsSucessful(true);              
              
            
            setUserName(null);
            setPassword(null);
            setRePassword(null);
            addNewUser(userName,password).then(() => {
              console.log('Account created successfully');
              Alert.alert("Account created successfully")
              navigation.navigate("LoginScreen")
            }).catch(err => {
              console.log(err);
              Alert.alert("UserName is already exist")
            });
          }
        

          }
          
        }}
        style={{
          borderWidth: 1.3,
          borderRadius: 100,
          height: '6%',
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10%',
        }}>
        <Text style={{fontSize: 20, color: COLOR_ACCENT, fontWeight: 'bold'}}>
          Create
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("LoginScreen")}>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#075aaa', marginBottom: '2%'}}>Alrady have an Account ?</Text>
      </View>
      </TouchableOpacity>
          </View>
         
      
    </View>
  );
};

export default CreatAccount;
