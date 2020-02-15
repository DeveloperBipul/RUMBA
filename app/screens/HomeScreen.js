import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {ActivityIndicator, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import stylesheet from '../src/styles/Authstyle';

const HomeScreen = props => {
  const [name, setName] = useState('loading');
  const [email, setEmail] = useState('loading');
  const Boiler = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.1.5:3000/me', {
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEmail(data.email);
        setName(data.name);
      });
  };
  useEffect(() => {
    Boiler();
  }, []);

  const logout = props => {
    AsyncStorage.removeItem('token').then(() => {
      props.navigation.replace('login');
    });
  };

  return (
    <View
      style={{
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text>Hello {name}</Text>
      <Text>your email is {email}</Text>
      <Button
        mode="contained"
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        onPress={() => logout(props)}>
        logout
      </Button>
      <TouchableOpacity
        style={stylesheet.newuser}
        onPress={() => props.navigation.navigate('feed')}>
        <Text>
          <Text style={stylesheet.newusertext}>feed Screen</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
