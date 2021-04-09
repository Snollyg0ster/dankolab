import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import backImg from '../../../img/back.png';

const BackButtonAndTitle = ({buttonName, titleName, navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.backCont}
        onPress={() => {
          console.log('>> go back');
          navigation.goBack();
        }}>
        <Image source={backImg} style={styles.img} />
        <Text style={styles.text}>{buttonName}</Text>
      </TouchableOpacity>
      <View>
        <Text numberOfLines={1} style={styles.bigText}>
          {titleName}
        </Text>
      </View>
    </View>
  );
};

export default BackButtonAndTitle;
