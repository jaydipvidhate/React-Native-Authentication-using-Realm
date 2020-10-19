import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';
import { findUserByUserNameAndPassword } from '../dataBase/LoginService';

const COLOR_ACCENT = '#5f259f';
const COLOR_ACCENT_LIGHT = '#b3dcff';
const COLOR_ACCENT_LIGHT2 = '#168eea';
const COLOR_WHITE = 'white';
const COLOR_BLACK = '#000000';
const COLOR_LIGHT_BLACK = '#7f7f7f';
const COLOR_LIGHT_WHITE = '#B2B2B2';
const COLOR_LIGHT_WHITE1 = '#f2f6fa';

const LoginScreen = ({navigation}) => {
  const fillAllDetials = () => {
    ToastAndroid.show('Plese fill all Detials', ToastAndroid.SHORT);
  };
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_ACCENT_LIGHT,
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '34.5%',
        }}>
        <View style={{marginBottom: '20%'}}>
          <Text
            style={{
              letterSpacing: 5,
              fontSize: 50,
              color: COLOR_ACCENT,
              fontWeight: 'bold',
            }}>
            LOGIN
          </Text>
        </View>
        <View
          style={{marginBottom: '10%', alignItems: 'center', width: '100%'}}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLOR_ACCENT,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              value={userName}
              onChangeText={(val) => setUserName(val)}
              autoFocus={false}
              placeholder="User Name "
              placeholderTextColor={COLOR_BLACK}
              fontSize={18}
              style={{color: COLOR_BLACK, width: '70%'}}></TextInput>
          </View>
        </View>
        <View
          style={{marginBottom: '10%', alignItems: 'center', width: '100%'}}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLOR_ACCENT,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              value={password}
              onChangeText={(val) => setPassword(val)}
              autoFocus={false}
              placeholder="Password "
              secureTextEntry={true}
              placeholderTextColor={COLOR_BLACK}
              fontSize={18}
              style={{color: COLOR_BLACK, width: '70%'}}></TextInput>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (userName == '' || password == '') {
            fillAllDetials();
          } else {
            setUserName('');
            setPassword('');
            findUserByUserNameAndPassword(userName, password).then((users) => {
              console.log(users);  
              if(users.length!=0){
                console.log('Login Succssfully');
                navigation.navigate("Home")
              }
              else{
               Alert.alert('User or Password is incorrect')

              }
            }).catch(err => {
              console.log(err);
            });
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
          Login
        </Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
              navigation.navigate("CreateAccount")
            setUserName('');
            setPassword('');
          }}>
          <Text style={{color: '#075aaa', marginBottom: '2%'}}>
            New Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Ohh you forgot the password     Then remember it!!!');
            setUserName('');
            setPassword('');
          }}>
          <Text style={{color: '#075aaa'}}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
