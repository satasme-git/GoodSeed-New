import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BMI from '../screens/BMI'
import BMIChart from '../screens/BMIChart'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName={'BMI'}>
      <Stack.Screen 
        name="BMI" 
        component={BMI}
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