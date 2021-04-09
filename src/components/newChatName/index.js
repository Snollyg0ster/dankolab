import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addChat, changeInputStatus} from '../../redux/chats/actions';
import {styles} from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const NewChatAdd = () => {
  const [text, setText] = useState('');
  const {chats} = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <View style={styles.cont}>
      <TextInput
        value={text}
        style={styles.input}
        placeholder={'name of new chat'}
        onChangeText={value => setText(value)}
        onSubmitEditing={() => {
          text ? dispatch(addChat({chatName: text})) : null;
          dispatch(changeInputStatus(false));
          setText('');
        }}
        maxLength={70}
      />
      <TouchableOpacity onPress={() => dispatch(changeInputStatus(false))}>
        <Icon name="close" size={30} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default NewChatAdd;
