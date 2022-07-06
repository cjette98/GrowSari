import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import { Cart } from '../screens';
import MainNav from './MainStack';
import { LABELS } from '../constant/theme';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={LABELS.FIND_PRODUCTS}
        component={MainNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={'search'} />
          ),
        }}
      />
      <Tab.Screen
        name={LABELS.CART}
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={'cart'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
