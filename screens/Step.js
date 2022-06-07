import React, { useEffect, useState ,useRef,useContext} from "react";
import { TouchableHighlight,TouchableOpacity, View , Text,Image,Dimensions} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { buttons, styles } from '../styles/Styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Background } from '../styles/Background';
import RBSheet from "react-native-raw-bottom-sheet";

import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import GifImage from '@lowkey/react-native-gif';

import BackgroundService from 'react-native-background-actions';

import * as Progress from 'react-native-progress';
import { map, filter } from "rxjs/operators";

import PercentageBar from '../components/PercentageBar';
import PushNotification from "react-native-push-notification";
import { HealthProvider, HealthContext } from '../context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';
// import { TouchableOpacity } from "react-native-gesture-handler";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

// import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import BarChart from "../components/BarChart";
import { DailyData } from "../styles/DailyData";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Step() {

    const navigation = useNavigation();

    const [filled,setFill] = useState(6000)
    const [speed,setSpeed] = useState(0)

    const [steps, setSteps] = useState(0);

    const [count,setCount]= useState(0);

    const [pause, setPause] = useState(false);

    const refRBSheet = useRef();
    
    const health = useContext(HealthContext);

    useEffect(() => {
            

    }, [])

    // const data = {
    //   labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    //   datasets: [
    //     {
    //       data: [20, 45, 28, 80, 99, 43, 45, 28, 80, 99, 43, 45, 28, 80, 99, 43, 99, 43, 45, 28, 80, 99, 43]
    //     }
    //   ]
    // };

    const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ];

    setTimeout(() => {
        setPause(false);
        // console.log(speed +'   '+ speed + '  ' + pause)       
    }, 3000);

    return (
      <View style={[styles.container,{justifyContent:'space-between'}]}>
          <View style={[styles.header,{elevation:0,justifyContent:'space-between',backgroundColor:'transparent'}]}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             />

             
          </View>
          
          <View style={{alignItems:'center',justifyContent:'center',marginTop:0}}>
          
          <View style={{marginVertical:15}}>
          <AnimatedCircularProgress
            size={windowWidth/2.2}
            width={5}
            fill={((health.steps*100)/filled)}
            rotation={-0}
            tintColor="#6bb333"
            backgroundColor="rgba(0,0,0,0.1)"
            
            lineCap={'round'}
            backgroundWidth={10}
            >
            {
                (fill) => (
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:40,color:'#6bb333',justifyContent:'center'}} onLayout={()=>setSpeed(health.steps)}>
                            {health.steps}
                        </Text> 
                        <Text style={{fontSize:30,color:'#6bb333'}}>Steps</Text>
                        
                        <Text style={{fontSize:17,color:'rgba(0,0,0,0.5)',marginTop:5}}>{filled-health.steps} Left</Text>
                    </View>
                
                )
            }
            </AnimatedCircularProgress>
            
          </View>
            <LinearGradient 
              colors={['#6bb333', '#6bb333']} 
              style={{alignItems:'center',justifyContent:'center',padding:0,width:'90%',borderRadius:15}}>
            <View style={{marginTop:0,flexDirection:'row',alignItems:'center',justifyContent:'space-around',width: '100%',}}>
              <View style={{paddingHorizontal:20,paddingVertical:5,alignItems:'center',borderRadius:10}}>
                <Text style={{fontSize:16,color:'#366011'}}>Distance{}</Text>
                {/* <View style={{backgroundColor: '#00e0ff',width:30,height:3,borderRadius:5}} /> */}
                <Text style={{fontSize:22,color:'#fff'}}>{(health.steps*0.000762).toFixed(2)}{<Text style={{fontSize:13,color:'#fff'}}>Km</Text>}</Text>
              </View>
              <View style={{paddingHorizontal:20,paddingVertical:5,alignItems:'center',borderRadius:10}}>
                <Text style={{fontSize:16,color:'#366011'}}>Complete</Text>
                {/* <View style={{backgroundColor: '#00e0ff',width:30,height:3,borderRadius:5}} /> */}
                <Text style={{fontSize:22,color:'#fff'}}>{health.steps+'/'+filled}({Math.round((health.steps*100)/filled,2).toFixed(2)}%)</Text>
                {/* <Text style={{fontSize:20,color:'#3d5875'}}>{(steps)/filled}</Text> */}
              </View>
            </View>
            </LinearGradient>

            
            {/* <View>
            {
              pause==false?
              <Image  
              source={require('../assets/walk2.png')} 
              style={{
                width: 100,
                height: 100,
                resizeMode:'cover'
              }}/>
              :
              <GifImage
                source={require('../assets/walk.gif')}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode={'cover'}
              />
            }
            <View style={styles.summary}>
            <Progress.Bar 
            progress={(health.steps)/filled} 
            width={windowWidth-60} 
            borderRadius={2} 
            height={10} 
            unfilledColor={'rgba(107, 179, 51,0.3)'}
            borderColor={'transparent'}
            color={'rgb(107, 179, 51)'}
            />
            </View>
            </View> */}
            
          
            </View>

            <View>

                <View style={styles.summary}>

                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    {/* <FontAwesome5 name={'walking'} size={20} color={'#6bb333'}/>                  
                    <Text style={{fontSize:17,color:'#366011',marginLeft:15}}>Summary</Text>  */}
                    

                    {/* <BarChart
                      style={{
                        // marginVertical: 8,
                        borderRadius: 16
                      }}
                      data={data}
                      width={windowWidth-30} // from react-native
                      height={windowHeight/3}
                      // yAxisLabel="$"
                      chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                          borderRadius: 16
                        },
                        propsForVerticalLabels:{
                          fontSize:8
                        },
                        strokeWidth:2,
                        barPercentage:0.2
                      }}
                      
                      // verticalLabelRotation={0}
                      withHorizontalLabels={false}
                      
                    /> */}
                      {/* <VictoryChart width={windowWidth-30} theme={VictoryTheme.material}>
                        <VictoryBar data={data} x="quarter" y="earnings" />
                      </VictoryChart> */}
                    <BarChart
                      height={windowHeight/3} 
                      width={windowWidth-30}
                      data={health.todayData}
                      barWidth={8}
                      color={'#6bb333'}
                      fontSize={8}
                     />
                      
                  </View>

                  <TouchableOpacity style={styles.summarybtn} onPress={()=>{navigation.navigate('Summary')}}>
                      <Text style={{fontSize:15,color:'#366011',marginRight:5}}>See more</Text>
                        <AntDesign name={'right'} size={15} color={'#6bb333'}/> 
                  </TouchableOpacity>                  
                </View>                
              

            </View>
      </View>
    );
  }