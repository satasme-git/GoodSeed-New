import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDrawer from '../drawer/HomeDrawer'
import BMI from '../screens/BMI'
import Form from '../screens/Eveluation'
import Avatar from '../screens/Avatar'
import Select from '../screens/Select'
import MainHome from '../screens/MainHome'
import BMIChart from '../screens/BMIChart'
import Step from '../screens/Step'
import Map from '../screens/Map'
import MainProfile from '../screens/MainProfile'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName={'Form'}>
      <Stack.Screen 
        name="Form" 
        component={Form}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Map" 
        component={Map}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Step" 
        component={Step}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="BMI" 
        component={BMI}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Main" 
        component={MainHome}
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
        name="Avatar" 
        component={Avatar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="profile" 
        component={MainProfile}
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
      <Stack.Screen 
        name="BMIChart" component={BMIChart}         
        options={{
          headerShown: false,
        }} 
      />
    </Stack.Navigator>
  );
}