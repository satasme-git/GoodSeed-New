// import * as React from 'react';
// import { Button, View , Text} from 'react-native';
// import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { buttons, styles } from '../styles/Styles';
// import CircleSlider from "react-native-circle-slider";
// import CircularSlider from 'react-native-circular-slider';

// export default function Sleeping() {

//     const navigation = useNavigation();

//     return (
//       <View style={styles.container}>
//           <View style={styles.header}>
//              <Ionicons 
//                 name="arrow-back" 
//                 size={30} 
//                 color="black" 
//                 onPress={() => navigation.goBack()}
//              /> 
//              <Text style={{fontSize:22,marginLeft:10}}>Sleeping Time</Text>
//           </View>
          
//           <View style={[styles.innerContainer,{backgroundColor: 'white',paddingHorizontal:15}]}>
//              <View>
//                 <Text>Add Today Slept time</Text>
//              </View>

//              <CircleSlider value={90} showClockFace />

//           </View>
        
//       </View>
//     );
//   }

  import React, { Component } from 'react';
  import { Dimensions, StyleSheet, Text, View,AppRegistry,Button, ScrollView } from 'react-native';
  import Svg, { G, Path } from 'react-native-svg';
  
  import CircularSlider from 'react-native-circular-slider';
  import TimerText from '../components/TimerText';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {SleepData} from '../styles/SleepData'
import { HealthProvider, HealthContext } from '../context/Context';
import moment from 'moment';

  const WAKE_ICON = (
    <G>
      <Path d="M2,12.9h1.7h3h2.7h3H14c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.9,0-1.7-0.7-1.7-1.7v-4
        c0-2.1-1.5-3.8-3.4-4.2C9,1.6,9,1.4,9,1.3c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1c0,0.2,0,0.3,0.1,0.4c-2,0.4-3.4,2.1-3.4,4.2v4
        c0,0.9-0.7,1.7-1.7,1.7c-0.4,0-0.7,0.3-0.7,0.7C1.3,12.6,1.6,12.9,2,12.9z"/>
      <Path d="M8,15.7c1.1,0,2.1-0.9,2.1-2.1H5.9C5.9,14.8,6.9,15.7,8,15.7z"/>
    </G>
  );
  
  const BEDTIME_ICON = (
    <G>
      <Path d="M11.7,10.5c-3.6,0-6.4-2.9-6.4-6.4c0-0.7,0.1-1.4,0.4-2.1C3.1,2.9,1.2,5.3,1.2,8.1c0,3.6,2.9,6.4,6.4,6.4
        c2.8,0,5.2-1.8,6.1-4.4C13.1,10.4,12.4,10.5,11.7,10.5z"/>
      <Path d="M8,7.6l2-2.5H8V4.4H11v0.6L9,7.6h2v0.7H8V7.6z"/>
      <Path d="M11.7,5.4l1.5-1.9h-1.4V3h2.2v0.5l-1.5,1.9h1.5v0.5h-2.2V5.4z"/>
      <Path d="M9.4,3l1.1-1.4h-1V1.3H11v0.4L9.9,3H11v0.4H9.4V3z"/>
    </G>
  );
  
  
  function calculateMinutesFromAngle(angle) {
    return Math.round(angle / (2 * Math.PI / (12 * 12))) * 5;
  }
  
  function calculateTimeFromAngle(angle) {
    const minutes = calculateMinutesFromAngle(angle);
    const h = Math.floor(minutes / 60);
    const m = minutes - h * 60;
  
    return { h, m };
  }
  
  function roundAngleToFives(angle) {
    const fiveMinuteAngle = 2 * Math.PI / 144;
  
    return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
  }
  
  function padMinutes(min) {
    if (`${min}`.length < 2) {
      return `0${min}`;
    }
  
    return min;
  }
  const BaseUrl = require('../styles/BaseUrl');
  export default class Sleeping extends Component {
   constructor(props){
      super(props);
      this.refreshScreen = this.refreshScreen.bind(this);
      this.forceUpdateHandler.bind(this);
    }
    
    state = {
      startAngle: Math.PI * 10/6,
      angleLength: Math.PI * 7/6,
      time:0,
      lastRefresh: Date(Date.now()).toString(),
      added:false,
      duration:''
    }
    static contextType = HealthContext;

    forceUpdateHandler(){
      this.forceUpdate();
    };

    refreshScreen() {
      this.setState({ lastRefresh: Date(Date.now()).toString() })
    }

    onTimeUpdate = (fromTimeInMinutes, minutesLong) => {
      this.setState({ minutesLong });
    }
  
    onUpdate = ({ startAngle, angleLength }) => {
      this.setState({
        startAngle: roundAngleToFives(startAngle),
        angleLength: roundAngleToFives(angleLength)
      });
    }
    
    getSleptData =()=>{
      
      fetch(BaseUrl.BASE_URL+'/api/sleepData/'+this.context.user.id)
      .then((response) => response.json())
      .then((json) => {
        

        const current = moment().format('YYYY-MM-DD')

        if (json!='no Item Found'){
          const added2 = moment(json.date).format('YYYY-MM-DD')
          if(added2==current){
            
            this.context.setSleep(json.duration+ ' Hours')

            this.setState({added:true,duration:json.duration})
            // this.bedtime=JSON.parse(json.bedtime)
            // this.waketime=JSON.parse(json.wake)
            
            console.log('wake time ' +this.context.sleep)
          }
          else{
            this.setState({added:false})
          }
          

        }
        
        console.log('Success:', json);
        //  health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
         // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
      })
      .catch((error) => console.error(error))
      .finally(() => {});

    }
    componentDidMount() {
      const { startAngle, angleLength , time } = this.state;
      this.setState({ time:time+1 });
      this.forceUpdate();
      this.getSleptData()
      // Runs after the first render() lifecycle
    }
    // forceRemount = () => {
    //   this.setState(({ uniqueValue }) => ({
    //     uniqueValue: uniqueValue + 1
    //   })
    // }
  
    render() {
      const { startAngle, angleLength , time ,added} = this.state;
      const bedtime = calculateTimeFromAngle(startAngle);
      const waketime = calculateTimeFromAngle((startAngle + angleLength) % (2 * Math.PI));
  
      const windowWidth = Dimensions.get('window').width;
      const windowHeight = Dimensions.get('window').height;

      // const BaseUrl = require('../styles/BaseUrl');

      const sleepData = (img) => {

        const hours = Math.floor(img / 60);
        const minutes = img - hours * 60;

        // var image = img.toString()
        const formData = new FormData()
    
        formData.append('id',this.context.user.id);
        formData.append('duration', hours+":"+minutes)
        formData.append('bedtime', JSON.stringify(bedtime));
        formData.append('waketime', JSON.stringify(waketime));

        console.log(bedtime)
    
        fetch(BaseUrl.BASE_URL+'/api/sleepData/', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(json => {
            // health.setUser(data)

            // storeUserData(data)
            // navigation.navigate('')
            this.context.setSleep(json.duration)

        const current = moment().format('YYYY-MM-DD')

        if (json!=null){
          const added = moment(json.date).format('YYYY-MM-DD')
          
            console.log(current)
          if(added==current){
            this.setState({added:true,duration:json.duration})
          }
          else{
            this.setState({added:false})
          }
          

        }
            console.log('Success:', json);
          })
          .catch(error => {
            console.log('Error:', error);
          });
      };
      return (
        <View style={styles.container} key={time} 
        onLayout={()=>{this.forceUpdateHandler()}}>

           <View style={{height: windowHeight/10,
                        width:windowWidth,
                        backgroundColor: 'white',
                        position:'absolute',
                        top:0,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'flex-start',
                        paddingLeft:10,
                        zIndex:1,
                        padding:10}}>
                           
            <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => this.props.navigation.goBack()}
             /> 
             <Text style={{fontSize:22,marginLeft:10}}>Sleeping Time </Text>
          </View>
          <ScrollView style={{marginTop:40,flex:1,padding:10}} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}>
          <View style={styles.timeContainer}>
            <View style={styles.time}>
              <View style={styles.timeHeader}>
                <Svg height={16} width={16}>
                  <G fill="#6bb333">{BEDTIME_ICON}</G>
                </Svg>
                <Text style={styles.bedtimeText}>Bedtime</Text>
              </View>
              <Text style={styles.timeValue}>{bedtime.h}:{padMinutes(bedtime.m)}</Text>
            </View>
            <View style={styles.time}>
              <View style={styles.timeHeader}>
                <Svg height={16} width={16}>
                  <G fill="#6bb333">{WAKE_ICON}</G>
                </Svg>
                <Text style={styles.wakeText}>Wake</Text>
              </View>
              <Text style={styles.timeValue}>{waketime.h}:{padMinutes(waketime.m)}</Text>
            </View>
          </View>
          <View>
            <TimerText
              style={styles.sleepTimeContainer}
              minutesLong={calculateMinutesFromAngle(angleLength)}
            />
            <CircularSlider
             key={time} 
              startAngle={startAngle}
              angleLength={angleLength}
              onUpdate={this.onUpdate}
              segments={5}
              strokeWidth={25}
              radius={100}
              gradientColorFrom="#6bb333"
              gradientColorTo="#6bb333"
              showClockFace
              clockFaceColor="#9d9d9d"
              bgCircleColor="#171717"
              stopIcon={<G scale="1.1" transform={{ translate: "-8, -8" }}>{WAKE_ICON}</G>}
              startIcon={<G scale="1.1" transform={{ translate: "-8, -8" }}>{BEDTIME_ICON}</G>}
            />
          </View>

            {
              added==true?
              // null
              <TouchableHighlight style={{backgroundColor:'rgba(107,179,51,0.2)',paddingHorizontal:15,paddingVertical:5,marginTop:20,borderRadius:25}}>
              <View>
                  <Text style={{fontSize:17}}>You Slept {this.state.duration} Hours Today</Text>
              </View>
            </TouchableHighlight>
              :
              <TouchableHighlight onPress={()=>sleepData(calculateMinutesFromAngle(angleLength))} style={{backgroundColor:'rgba(107,179,51,0.2)',paddingHorizontal:15,paddingVertical:5,marginTop:20,borderRadius:25}}>
                <View>
                    <Text style={{fontSize:17}}>Save Slept time</Text>
                </View>
              </TouchableHighlight>
            }
          

          <View style={{width:windowWidth-20,marginTop:15,marginBottom:10,borderRadius:5,borderColor:'rgba(107,179,51,0.7)',borderWidth:1}}>
          <View style={{flexDirection:'row',backgroundColor:'rgba(107,179,51,0.2)'}}>
          <Text style={{width:'40%',fontSize:17,fontWeight:'bold',padding:10,borderColor:'rgba(107,179,51,0.7)',borderRightWidth:1}}>Age group</Text>
                <Text style={{width:'65%',fontSize:17,fontWeight:'bold',padding:10}}>	Recommended amount of sleep</Text>
            </View>
            {/* <View style={{backgroundColor: 'gray',height:1,width:'100%',margin:2}} /> */}
          {
            SleepData.map((data)=>
              <View key={data.id} style={{flexDirection:'row'}}>
                <Text style={{width:'40%',padding:10,fontSize:16,borderColor:'rgba(107,179,51,0.7)',borderRightWidth:1}}>{data.age}</Text>
                <Text style={{width:'65%',padding:10,fontSize:16}}>{data.amount}</Text>
              </View>
            )
          }
          </View>
          {/* <View>
          {
            SleepData.map((data)=>
              <View key={data.id} style={{flexDirection:'row',}}>
                <Text style={{width:200,height:40}}>{data.age}</Text>
                <Text style={{width:200,height:40}}>{data.amount}</Text>
              </View>
            )
          }
</View> */}
          {/* <Button onPress={this.refreshScreen} title="Refresh Screen" /> */}
</ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    bedtimeText: {
      color: '#000',
      marginLeft: 3,
      fontSize: 16,
    },
    wakeText: {
      color: '#000',
      marginLeft: 3,
      fontSize: 16,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginTop:50,
      marginLeft:0
    },
    time: {
      alignItems: 'center',
      flex: 1,
    },
    timeHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeValue: {
      color: '#000',
      fontSize: 35,
      fontWeight: "300",
    },
    sleepTimeContainer: {
      flex: 1,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  });

  AppRegistry.registerComponent('Sleeping', () => Sleeping);