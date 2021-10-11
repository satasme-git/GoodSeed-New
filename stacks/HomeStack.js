import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import Form from '../screens/Form'
import Avatar from '../screens/Avatar'
import Select from '../screens/Select'
import Challenge from '../screens/Challenge'
import Step from '../screens/Step'


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName={'Challenge'}>
      <Stack.Screen 
        name="Home" component={Home}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Challenge" component={Challenge}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Select" 
        component={Select}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Form" 
        component={Form}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Avatar" 
        component={Avatar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}