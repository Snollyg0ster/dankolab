import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import BackButtonAndTitle from './../../components/backButton/index';

const MessagesScreen = ({route, navigation}) => {
  const {name} = route.params;
  return (
    <View>
      <View style={styles.navbar}>
        <BackButtonAndTitle
          buttonName={'Back'}
          titleName={name}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default MessagesScreen;
