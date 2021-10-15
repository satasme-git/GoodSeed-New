import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Habbits = [
    {
      id:'1',
    title: 'Walking',
    color:'#3b1568',
    fontColor:'white',
    screen:'Step',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/walkman.png')
    },
    {
      id:'2',
    title: 'Eating',
    color:'#f5ac4e',
    fontColor:'black',
    screen:'Eat',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/food.png')
    },
    {
      id:'3',
    title: 'Elimination',
    color:'#dd4224',
    fontColor:'white',
    screen:'Illumination',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/glass.png')
    },
    {
      id:'4',
    title: 'Sleeping',
    color:'#bb280f',
    fontColor:'white',
    screen:'Sleeping',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/sleep.png')
    },
    {
      id:'5',
    title: 'Meditation',
    color:'#940700',
    fontColor:'white',
    screen:'Meditation',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/medi.png')
    },
    
  ]
  