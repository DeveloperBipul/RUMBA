import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View, FlatList} from 'react-native';
import stylesheet from '../src/styles/HomeStyle';
import AsyncStorage from '@react-native-community/async-storage';

const FeedScreen = props => {
  const [text, setText] = useState('loading');
  const Boiler = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.1.5:3000/post', {
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setText(data.text);
      });
  };
  useEffect(() => {
    Boiler();
  }, []);

  return (
    <View style={stylesheet.container}>
      if text == 'loading' return {text}
      else return( return text.map(item=>{<Text>{item.text}</Text>}))
    </View>
  );
};

export default FeedScreen;
