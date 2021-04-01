import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style/index';

const InputScreen = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Image
        style={styles.img}
        source={require('../../../img/StartScreen.png')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Chats');
          console.log('>> go to chat');
        }}>
        <Text style={styles.hi}>Войди</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputScreen;
