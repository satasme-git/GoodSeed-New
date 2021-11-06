import React, {useState,useContext,useEffect} from 'react';
import { Button, View , Text ,TouchableOpacity,Image, Dimensions} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import { HealthProvider, HealthContext } from '../context/Context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Illumination() {

   const navigation = useNavigation();

   const health = useContext(HealthContext);
   
   const [target, setTarget] = useState(0);
   const [ml, setMl] = useState(0);
   const [height, setHeight] = useState(0);

   const BaseUrl = require('../styles/BaseUrl');

   const addTarget =()=>{
      var fullheight = windowHeight-(windowHeight/4.5)
      var oneGlass = fullheight/8
      
          setTarget(target+1)
          setMl(ml+250)
          setHeight(height+oneGlass)
          setStepCount(target+1)
   }
   const minusTarget =()=>{
      var fullheight = windowHeight-(windowHeight/9)
      var oneGlass = fullheight/8
         if(target>0){
            setTarget(target-1)
            setMl(ml-250)
            setHeight(height-oneGlass)
            setStepCount(target-1)
         }
         else{
            setMl(0)
            setHeight(0)
            setStepCount(0)
         }
   }

   const setStepCount =  (glass) => {

  
      const formData = new FormData()
  
      formData.append('member_id', health.user.id);
      formData.append('glasses', glass);
  
      
      fetch(BaseUrl.BASE_URL+'/api/Elimination/', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // navigation.navigate('profile')
          console.log('Success:', data);
          health.setGlasses(data.glasses)
         //  setSteps(parseInt(data.steps))
          // Message('Nice','#6bb333','You Created Challenge Successfully','Start Walking','');
        })
        .catch(error => {
          // getAsyncSteps()
          // console.log('Error:', formData);
        });
  
    };
    const getData =()=>{
      var fullheight = windowHeight-(windowHeight/9)
      var oneGlass = fullheight/8

      fetch(BaseUrl.BASE_URL+'/api/Elimination/'+health.user.id)
      .then((response) => response.json())
      .then((json) => {
         // health.setProPic(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
         console.log(json)
         setTarget(parseInt(json.glasses))
         setHeight(parseInt(json.glasses)*oneGlass)
         setMl(parseInt(json.glasses)*250)
         // console.log(BaseUrl.BASE_URL+'/assets/profile_pics/'+json[1].image)
      })
      .catch((error) => console.error(error))
      .finally(() => {});

    }

    useEffect(() => {
      getData()
      // getStepData()
      // getSteps()
    }, []);
    return (
      <View style={styles.container}>
          <View style={[styles.header,{backgroundColor:'transparent'}]}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             /> 
             <Text style={{color:'#000',fontSize:22,marginLeft:10}}>Elimination</Text>
          </View>
          
          <View style={[styles.innerContainer,{alignItems:'center',justifyContent:'center'}]}>
               <View style={{zIndex:1,backgroundColor:'rgba(255,255,255,0.5)'}}>
                  <Animatable.Text  key={target} animation='flipInX'style={{fontSize:85,color:'#6bb333'}}>{ml}{<Text style={{fontSize:45}}>ml</Text>}</Animatable.Text>
               </View>
               {/* <View style={{zIndex:4}}>
                  <Text style={{fontSize:17}}>{ml}ml</Text>
               </View> */}
               
               
               <View style={{flexDirection:'row',alignItems:'center',zIndex:4,marginTop:40}}> 

                  <TouchableOpacity onPress={()=>minusTarget()}  style={{borderWidth:1,borderColor:'#6bb333',backgroundColor:'rgba(255,255,255,0.4)',borderRadius:30,alignItems:'center',justifyContent:'center',width:50,height:50}}>
                              <Text style={{fontSize:30,alignSelf:'center'}}>-</Text>
                  </TouchableOpacity>

                  <View style={{alignItems:'center'}}>
                  <Animatable.Text key={target} animation={'flipInY'} style={{fontSize:40,color:'#000',paddingVertical:5,paddingHorizontal:15,width:120,textAlign:'center'}}>{target}</Animatable.Text>
                  <Text style={{fontSize:17,color:'#000',}}>Glasses</Text>
                  </View>
                  

                  <TouchableOpacity  onPress={()=>addTarget()} style={{borderWidth:1,borderColor:'#6bb333',backgroundColor:'rgba(255,255,255,0.4)',borderRadius:30,alignItems:'center',justifyContent:'center',width:50,height:50}}>
                              <Text style={{fontSize:30,alignSelf:'center'}}>+</Text>
                  </TouchableOpacity>
               </View> 


               <Animatable.View animation={'fadeInLeft'} style={{position:'absolute',top:55,zIndex:3,backgroundColor:'rgba(255,255,255,0.15)',borderRadius:10}}>
                  <Text style={{fontSize:12,textAlign:'center',padding:10,color:'gray'}}>Health experts commonly recommend eight 8-ounce glasses, which equals about 2 liters, or half a gallon a day. </Text>   
               </Animatable.View>  
               <View style={{position: 'absolute',bottom:0,zIndex:1,opacity:0.3}}>
                  <Image source={require('../assets/watering2.gif')} style={{height:20,width:windowWidth,tintColor:'#2382CB'}}/>
                  <View style={{backgroundColor:'#2382CB',height:height,width:windowWidth}} />
               </View>
          </View>
        
      </View>
    );
  }