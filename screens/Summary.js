import React, { useState , useEffect , useContext, useRef  } from 'react';
import { Button, View , Text, TouchableOpacity,Dimensions} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import { SummaryButtons } from '../styles/SummaryButtons';
import BarChart from '../components/BarChart';
import { HealthProvider, HealthContext } from '../context/Context';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Summary() {

    const navigation = useNavigation();

    const [key, setKey] = useState(0);
    const [week, setWeek] = useState([]);
    const [month, setMonth] = useState([]);
    const health = useContext(HealthContext);
    const BaseUrl = require('../styles/BaseUrl');

    const getWeek =()=>{
         fetch(BaseUrl.BASE_URL+'/api/weekSteps/'+health.user.id)
         .then((response) => response.json())
         .then((json) => {
         //  console.log(json)
          setWeek(json)
         })
         .catch((error) => console.error(error))
         .finally(() => {});
    }
  
    const getMonth =()=>{
      fetch(BaseUrl.BASE_URL+'/api/monthSteps/'+health.user.id)
      .then((response) => response.json())
      .then((json) => {
       console.log(json)
       setMonth(json)
      })
      .catch((error) => console.error(error))
      .finally(() => {});
 }  

   const weekPeriod =()=>{
      let currentDate = moment();
      let weekStart = currentDate.clone().startOf('week');
      let weekEnd = currentDate.clone().endOf('week');

      return weekStart.format('D MMM YYYY') +' - '+weekEnd.format('D MMM YYYY');
   }

    useEffect(() => {
      getWeek()
      getMonth()
    },[]);

    return (
      <View style={styles.container}>
          <View style={styles.header}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             />
             <Text style={{color:'black',fontSize:22,marginLeft:10}}>Summary</Text> 
          </View>
          
          <View style={[styles.innerContainer,{alignItems:'center'}]}>
         <View style={{paddingHorizontal:10,borderBottomWidth:5,borderColor:'#6bb333'}}>
         <View style={{marginTop:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between',width: '100%',}}>
                  
                  {
                     SummaryButtons.map((item,index)=>
                        <TouchableOpacity 
                        key={index}
                        style={{backgroundColor:key==index?'#6bb333':'rgba(107, 179, 51,0.3)',width:(windowWidth-30)/3,justifyContent:'center',alignItems:'center',padding:7,borderTopLeftRadius:20,borderTopRightRadius:20}}
                        onPress={()=>{setKey(index)}}
                        >
                           <View>
                              <Text style={{color:key==index?'white':'gray',fontSize:17}}>{item.title}</Text>
                           </View>
                        </TouchableOpacity>                     
                     )
                  }
                  
               </View>            
         </View>
         
         <Animatable.View key={key} animation={'slideInRight'}>
         <View style={{paddingVertical:20,alignItems:'center'}}>
         {
            key==0?
            <Text style={{fontSize:18,color:'rgba(0,0,0,1)'}}>{moment().format('D MMM YYYY')}</Text>
            :
            key==1?
            <Text style={{fontSize:18,color:'rgba(0,0,0,1)'}}>{weekPeriod()}</Text>
            :
            <Text style={{fontSize:18,color:'rgba(0,0,0,1)'}}>{moment().format('MMM YYYY')}</Text>
         }            
         </View>


         {
            key==0?
            <BarChart
            height={windowHeight/3} 
            width={windowWidth-30}
            data={health.todayData}
            barWidth={8}
            color={'#6bb333'}
            fontSize={8}
           />
            :
            key==1?
            week==[]?
            null
            :
            <BarChart
            height={windowHeight/3} 
            width={windowWidth-30}
            data={week}
            barWidth={10}
            color={'#6bb333'}
            fontSize={8}
           />
            :
            month==[]?
            null
            :
            <BarChart
            height={windowHeight/3} 
            width={windowWidth-30}
            data={month}
            // data={health.todayData}
            barWidth={10}
            color={'#6bb333'}
            fontSize={8}
           />
         }
         </Animatable.View>
          </View>
        
      </View>
    );
  }