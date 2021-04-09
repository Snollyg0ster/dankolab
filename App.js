import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InputScreen from './src/screens/inputScreen/index';
import ChatsScreen from './src/screens/chatsScreen/index';
import {Provider} from 'react-redux';
import store from './store';
import MessagesScreen from './src/screens/messagesScreen/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Input">
          <Stack.Screen
            name="Input"
            component={InputScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Chats"
            component={ChatsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
