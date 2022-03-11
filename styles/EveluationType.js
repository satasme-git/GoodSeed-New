import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const EveluationType = [
    {
      id:'1',
    title: 'Personal Information',
    subtitle:'Please give approximately correct answers for acurate evaluation.',
    },
    {
      id:'2',
    title: 'Food Consumption',
    subtitle:'Please give approximately correct answers for acurate evaluation.',
    },
    {
      id:'3',
      title: 'Activity',
      subtitle:'Please give approximately correct answers for acurate evaluation.',
    },
    {
      id:'4',
      title: 'Stress',
      subtitle:'Please give approximately correct answers for acurate evaluation.',
    },
    
  ]