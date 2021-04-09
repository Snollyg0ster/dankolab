import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style/index';
import BackButtonAndTitle from './../../components/backButton/index';
import ChatsList from './../../components/chatsList/index';
import AddButton from './../../components/addButton/index';
import NewChatAdd from './../../components/newChatName/index';
import {useSelector} from 'react-redux';

const ChatsScreen = ({navigation}) => {
  const {chats} = useSelector(state => state);

  return (
    <View style={styles.screen}>
      <View style={styles.navbar}>
        <BackButtonAndTitle
          buttonName={'Back'}
          titleName={'Chats'}
          navigation={navigation}
        />
        <AddButton />
      </View>
      {chats.inputStatus ? <NewChatAdd /> : null}
      <View style={styles.cont}>
        <ChatsList navigation={navigation} />
      </View>
    </View>
  );
};

export default ChatsScreen;
