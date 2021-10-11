import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import SelectStack from '../stacks/SelectStack'
import Welcome from '../screens/Welcome'
import Profile from '../screens/Profile'
import HomeDrawer from '../drawer/HomeDrawer'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" component={Welcome}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Login" component={Login}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Profile2" component={SelectStack}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="HomeDrawer" component={HomeDrawer}         
        options={{
          headerShown: false,
        }} 
      />
    </Stack.Navigator>
  );
}