import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Options from './Options';
import Details from './Details';
const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Options"
      component={Options}
      Options={{headerShown: false}}
    />
    <MainStack.Screen name="Details" component={Details} />
    <MainStack.Screen name="Hotels" component={Options} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
