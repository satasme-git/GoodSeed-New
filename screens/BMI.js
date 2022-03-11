import React, { useRef, useState, useContext, useEffect } from "react";
import { Animated, View, StyleSheet, PanResponder, Image ,Dimensions,Text,Button, TouchableHighlight} from "react-native";
import { Background } from '../styles/Background';
// import { BlurView } from "@react-native-community/blur";
import RnVerticalSlider from 'rn-vertical-slider';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Slider from '@react-native-community/slider';

import SwitchSelector from "react-native-switch-selector";

import { useNavigation , DrawerActions } from '@react-navigation/native';
import { HealthContext } from '../context/Context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Modal from 'react-native-modal';
export default function BMI  ()  {

  const navigation = useNavigation();

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        {useNativeDriver: false}
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

const options = [
  { label: "Metric", value: true },
  { label: "Statndard", value: false }
];



const BaseUrl = require('../styles/BaseUrl');
const health = useContext(HealthContext);

const [value,setValue] = useState(0)
const [lbVal,setLbVal] = useState('480')

const [color,setColor] = useState('#fff')
const [color2,setColor2] = useState('#fff000')
const [img,setImg] = useState(require('../assets/bmi/18.png'))

const [text,setText] = useState('UNDERWEIGHT')


const [weight,setWeight] = useState(0)
const [lbweight,setLbWeight] = useState('66')


const [sbmi,setSBmi] = useState(0.0)

const [cm,setCm] = useState(true)

const [isModalVisible, setModalVisible] = useState(false);

const [isLoading, setLoading] = useState(true);


const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

const calculateBmi = async () => {

  const height = parseInt(value) / 100;
  const w = parseInt(weight);
  const _Bmi_val = (w / (height * height)).toFixed(2);

  if (_Bmi_val<=18.5){
    setColor('#26abe4')
    setColor2('#5ac9f4')
    setImg(require('../assets/bmi/18.png'))
    setText('UNDERWEIGHT')
  }
  else if ( _Bmi_val<= 24.9){
    setColor('#6b7f38')
    setColor2('#9eb33a')
    setImg(require('../assets/bmi/25.png'))
    setText('NORMAL')
  }
  else if ( _Bmi_val<= 29.9){
    setColor('#eeab2a')
    setColor2('#f9c90d')
    setImg(require('../assets/bmi/30.png'))
    setText('OVERWEIGHT')
  }
  else if ( _Bmi_val<= 34.9){
    setColor('#e9752c')
    setColor2('#f38a2f')
    setImg(require('../assets/bmi/35.png'))
    setText('OBESE')
  }
  else if ( _Bmi_val>= 35){
    setColor('#ec1f26')
    setColor2('#f1484e')
    setImg(require('../assets/bmi/40.png'))
    setText('EXTREMLY OBESE')
  }

  setSBmi(_Bmi_val)
  toggleModal()
}

const getBMI =()=>{
      
  fetch(BaseUrl.BASE_URL+'/api/BasicDetails/'+health.user.member_id)
  .then((response) => response.json())
  .then((json) => {
     console.log(json.bmi)
     setValue(parseInt(json.height))
     setWeight(parseInt(json.weight))

  })
  .catch((error) => console.error(error))
  .finally(() => setLoading(false));

}

const calculateBmiStandard = async () => {

  const height = parseInt(value);
  const w = parseInt(weight);
  const _Bmi_val= w / height / height  * 703
  // const _Bmi_val = (w / (height * height)).toFixed(2);

  if (_Bmi_val<=18.5){
    setColor('#26abe4')
    setColor2('#5ac9f4')
    setImg(require('../assets/bmi/18.png'))
    setText('UNDERWEIGHT')
  }
  else if ( _Bmi_val<= 24.9){
    setColor('#6b7f38')
    setColor2('#9eb33a')
    setImg(require('../assets/bmi/25.png'))
    setText('NORMAL')
  }
  else if ( _Bmi_val<= 29.9){
    setColor('#eeab2a')
    setColor2('#f9c90d')
    setImg(require('../assets/bmi/30.png'))
    setText('OVERWEIGHT')
  }
  else if ( _Bmi_val<= 34.9){
    setColor('#e9752c')
    setColor2('#f38a2f')
    setImg(require('../assets/bmi/35.png'))
    setText('OBESE')
  }
  else if ( _Bmi_val>= 35){
    setColor('#ec1f26')
    setColor2('#f85e63')
    setImg(require('../assets/bmi/40.png'))
    setText('EXTREMLY OBESE')
  }

  setSBmi(_Bmi_val)
  toggleModal()
}

useEffect(() => {
  getBMI()
}, []);

  return (
      <View style={[styles.container,{alignItems:'center',justifyContent:'center',backgroundColor: 'white',}]}>
        
        <View style={{backgroundColor: 'transparent',width:'100%',position:'absolute',top:0,left:0,padding:10}}>
          <Ionicons 
            name="menu-outline" 
            size={30} 
            color="black" 
            style={{zIndex:2}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          /> 
        </View>

        <Modal 
          isVisible={isModalVisible}
        >
          <View style={{flex: 1,backgroundColor:'white',justifyContent:'center',alignItems:'center',padding:20,borderRadius:10,width:windowWidth-40,alignSelf:'center'}}>
            <View style={{position:'absolute',top:0,bottom:150,backgroundColor:color,width:windowWidth-40,borderTopLeftRadius:10,borderTopRightRadius:10}}>

            </View>
            <Text style={{fontSize:30,color:'rgba(0,0,0,0.6)',fontWeight:'bold',position: 'absolute',top:20,textAlign:'center'}}>{text}</Text>
            <Image source={img} style={{height:200,width:200,tintColor:color2,resizeMode:'contain',marginBottom:120}} />

            <View style={{position:'absolute',height:150,bottom:75,backgroundColor:'white',width:150,borderRadius:200}}></View>
            <View style={{position:'absolute',height:140,bottom:80,backgroundColor:color2,width:140,borderRadius:200,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',fontSize:20}}>Index</Text>
              <Text style={{fontSize:35,fontWeight:'bold',color:'#fff',alignSelf:'center'}}>{sbmi}</Text>
            </View>

            <TouchableHighlight 
            onPress={toggleModal}
            underlayColor={color2} 
            style={{backgroundColor:'white',borderWidth:2,alignSelf:'flex-end',paddingVertical:5,position:'absolute',bottom:20,right:180,paddingHorizontal:20,borderRadius:20,borderColor:color}}>
              <Text style={{color:'black',fontSize:16}}>Close</Text>
            </TouchableHighlight>


          </View>
        </Modal>



        <Image source={require('../assets/ruler2.png')} style={{width:'100%',height:windowHeight-100,position:'absolute',resizeMode:'contain',left:windowWidth/2.65,zIndex:1}} />   
        
          <Slider
            style={{width: windowHeight-100, height: 15,zIndex:2,transform: [{ rotateZ : '-90deg' }],left:windowWidth/2.4}}
            minimumValue={0}
            maximumValue={200}
            vertical={true}
            minimumTrackTintColor="#6bb333"
            maximumTrackTintColor="#000000"
            value={value}
            step={1}
            onValueChange={(value)=>setValue(value)}
            // thumbImage={require('../assets/thumb2.png')}
          />
        {/* </View> */}
        <View style={{position:'absolute',bottom:50,left:10}}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'#4b937c'}}>{weight} Kg</Text>
        </View>


        <View style={{position:'absolute',top:30,right:10}}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'#4b937c'}}>{value} cm</Text>
        </View>

        <View style={{position:'absolute',bottom:50}}>
          <Slider
            style={{width: windowWidth-100, height: 10,zIndex:2}}
            minimumValue={0}
            maximumValue={200}
            vertical={true}
            minimumTrackTintColor="#6bb333"
            maximumTrackTintColor="#000000"
            value={weight}
            step={1}
            onValueChange={(value)=>setWeight(value)}
            // thumbImage={require('../assets/thumb.png')}
          />
        </View>

        <Image source={require('../assets/profile2.png')} style={{height:((windowHeight-130)/200)*parseInt(value),width:((windowWidth-100)/200)*parseInt(weight),position: 'absolute',bottom:55,resizeMode:'stretch'}} />
 

        <TouchableHighlight 
        underlayColor={'white'}
        style={{position: 'absolute',bottom:10,padding:5,backgroundColor:'transparent',borderWidth:2,borderRadius:20,borderColor:'#4b937c'}} 
        onPress={cm==true?()=>calculateBmi():()=>calculateBmiStandard()} >
          <Text >   Calculate BMI   </Text>
        </TouchableHighlight>
    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  point: {
    height: 15,
    width: 15,
    backgroundColor: "blue",
    borderRadius: 20
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right:  0,
  }
});