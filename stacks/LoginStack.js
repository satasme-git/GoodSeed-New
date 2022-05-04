import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import SelectStack from '../stacks/SelectStack'
import Welcome from '../screens/Welcome'
import Profile from '../screens/Profile'
import HomeDrawer from '../drawer/HomeDrawer'
import ContactNumber from '../screens/ContactNumber';
import UserType from '../screens/UserType'
import MainHome from '../screens/MainHome'
import Step from '../screens/Step';
import Eat from '../screens/Eat';
import Meditation from '../screens/Meditation';
import Sleeping from '../screens/Sleeping';
import Illumination from '../screens/Illumination';

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
        name="UserType" component={UserType}         
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
        name="ContactNumber" component={ContactNumber}         
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
            {/* <Stack.Screen 
        name="MainHome" component={MainHome}         
        options={{
          headerShown: false,
        }} 

      />
      <Stack.Screen 
        name="Step" component={Step}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Eat" 
        component={Eat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Sleeping" 
        component={Sleeping}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Illumination" 
        component={Illumination}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Meditation" 
        component={Meditation}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}