import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style/index';

const ChatsScreen = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Input');
          console.log('>> go to input');
        }}>
        <Text style={styles.hi}>Go to Input</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatsScreen;
