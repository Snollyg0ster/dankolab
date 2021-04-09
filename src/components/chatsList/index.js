import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import {deleteChat} from './../../redux/chats/actions';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ChatsList = ({navigation}) => {
  const [width, setWidth] = useState(null);
  const {chats} = useSelector(state => state);
  const dispatch = useDispatch();
  const textWidth = width ? width - 20 : 200;

  const rightAction = id => {
    return (
      <TouchableOpacity
        style={styles.rightComp}
        onPress={() => dispatch(deleteChat(id))}>
        <Text style={styles.rightCompText}>delete</Text>
      </TouchableOpacity>
    );
  };

  const item = ({item}) => (
    <Swipeable renderRightActions={() => rightAction(item.id)}>
      <View
        style={styles.item}
        onLayout={event => {
          let layout = event.nativeEvent.layout;
          setWidth(layout.width);
        }}>
        <TouchableOpacity
          style={{width: textWidth, height: 75}}
          onPress={() =>
            navigation.navigate('Messages', {name: item.chatName})
          }>
          <Text style={styles.chatName}>{item.chatName}</Text>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.cont}>
      <FlatList
        style={styles.flatlist}
        data={chats.allChats}
        renderItem={item}
        keyExtractor={item => item.id}
        inverted={true}
      />
    </View>
  );
};

export default ChatsList;
