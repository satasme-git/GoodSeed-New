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
    png:require('../assets/walkman.png'),
    desc:'Walking helps preventing not just joint, heart and lung problems, but it improves also our metabolism and reduces the risk of diabetes.'
    },
    {
      id:'2',
    title: 'Sleeping',
    color:'#bb280f',
    fontColor:'white',
    screen:'Sleeping',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/sleep.png'),
    desc:'Your behaviors during the day, and especially before bedtime, can have a major impact on your sleep.'
    },
    {
      id:'3',
    title: 'Elimination',
    color:'#dd4224',
    fontColor:'white',
    screen:'Illumination',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/glass.png'),
    desc:'Drinking sufficient water is essential to stay hydrated. It improves digestion, keeps skin healthy and boosts brain activity.'
    },
    {
      id:'4',
    title: 'Eating',
    color:'#f5ac4e',
    fontColor:'black',
    screen:'Eat',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/food.png'),
    desc:'The food you eat can affect your health and your risk for certain diseases. You may need to change some of your daily habits.'
    },
    {
      id:'5',
    title: 'Meditation',
    color:'#940700',
    fontColor:'white',
    screen:'Meditation',
    height:windowWidth/4,
    width:windowWidth/4,
    png:require('../assets/medi.png'),
    desc:"Meditation can wipe away the day's stress, bringing with it inner peace"
    },
    
  ]
  