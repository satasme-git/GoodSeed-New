import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SleepData = [
    {
      id:'1',
    age: 'Infants 4 months to 12 months',
    amount:'12 to 16 hours per 24 hours, including naps',
    },
    {
      id:'2',
      age: '1 to 2 years',
      amount:'11 to 14 hours per 24 hours, including naps',
    },
    {
      id:'3',
      age: '3 to 5 years',
      amount:'10 to 13 hours per 24 hours, including naps',
    },
    {
      id:'4',
      age: '6 to 12 years',
      amount:'9 to 12 hours per 24 hours',
    },
    {
      id:'5',
      age: '13 to 18 years',
      amount:'8 to 10 hours per 24 hours',
    },
    {
      id:'6',
      age: 'Adults',
      amount:'7 or more hours a night',
    },
    
  ]
  