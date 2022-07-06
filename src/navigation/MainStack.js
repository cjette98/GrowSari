import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, ProductDetails } from '../screens';

const MainStack = createNativeStackNavigator();
const MainNav = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen name='HomeScreen' component={Main} />
    <MainStack.Screen name='DetailsScreen' component={ProductDetails} />
  </MainStack.Navigator>
);
export default MainNav;
