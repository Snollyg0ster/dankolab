import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import addImg from '../../../img/add.png';
import {useDispatch} from 'react-redux';
import {changeInputStatus} from '../../redux/chats/actions';

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.backCont}
        onPress={() => {
          console.log('>> add');
          dispatch(changeInputStatus(true));
        }}>
        <Image source={addImg} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
