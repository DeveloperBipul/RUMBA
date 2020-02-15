import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import stylesheet from '../src/styles/Authstyle';

const SignScreen = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendCred = async props => {
    fetch('http://192.168.1.7:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          await AsyncStorage.setItem('token', data.token);
          props.navigation.replace('home');
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };

  return (
    <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <View style={stylesheet.container}>
        <Text style={stylesheet.Logo}>
          Nep<Text style={stylesheet.LogoIn}>syd.</Text>
        </Text>
        <View style={stylesheet.Errormsg}>
          <Text style={stylesheet.Errormessage}> Error display</Text>
        </View>
        <KeyboardAvoidingView behavior="position">
          <View style={stylesheet.formContainer}>
            <View style={{marginTop: 32}}>
              <Text style={stylesheet.InputTitle}>Full Name</Text>
              <TextInput
                style={stylesheet.input}
                selectionColor="#1e3799"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                theme={{colors: {primary: 'blue'}}}
                onChangeText={text => setName(text)}
              />
            </View>

            <View style={{marginTop: 32}}>
              <Text style={stylesheet.InputTitle}> Email Address</Text>
              <TextInput
                style={stylesheet.input}
                selectionColor="#1e3799"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                theme={{colors: {primary: 'blue'}}}
                onChangeText={text => setEmail(text)}
              />
            </View>

            <View style={{marginTop: 32}}>
              <Text style={stylesheet.InputTitle}>Password</Text>
              <TextInput
                style={stylesheet.input}
                selectionColor="#1e3799"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                theme={{colors: {primary: 'blue'}}}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={{marginTop: 32}}>
              <TouchableOpacity
                style={stylesheet.button}
                onPress={() => sendCred(props)}>
                <Text style={stylesheet.buttonText}>Create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={stylesheet.newuser}
          onPress={() => props.navigation.replace('signin')}>
          <Text>
            <Text style={stylesheet.newusertext}>I have my account</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignScreen;
