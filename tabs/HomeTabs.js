import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import HomeStack from '../stacks/HomeStack'
import MainHomeStack from '../stacks/MainHomeStack'
import Habbits from '../screens/Habbits'

// const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (

    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#6bb333"
    inactiveColor="#c4c4c4"
    barStyle={{ backgroundColor: '#fff' }}
    shifting={true}
    >
      <Tab.Screen name="Home" component={MainHomeStack} 
              options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={25} />
            ),
        }}
    />

      <Tab.Screen name="Challenge" component={HomeStack} 
            options={{
            tabBarLabel: 'Challenge',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="game-controller-outline" color={color} size={25} />
            ),
        }}
    />
      <Tab.Screen name="Habbits" component={Habbits} 
            options={{
            tabBarLabel: 'Habbits',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="water-outline" color={color} size={25} />
            ),
        }}
    />
    </Tab.Navigator>
  

  );
}