import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SummaryButtons = [
    {
        id:1,
        title: 'Today',
        height:0,
    },
    {
        id:2,
        title: 'This Week',
        height:0,
    },
    {
        id:3,
        title: 'This Month',
        height:0,
    }
  ]
  