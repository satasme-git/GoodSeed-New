import { View, Text } from 'react-native';
import React, { useState, useEffect ,useContext} from 'react' 
import { styles,  buttons} from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Users } from '../styles/Users';

import { HealthContext } from '../context/Context';

import { useNavigation , DrawerActions } from '@react-navigation/native';

import  Loader  from '../components/Loader'

export default function UserType() {

  const health = useContext(HealthContext);

  const navigation = useNavigation();

  const BaseUrl = require('../styles/BaseUrl');

  const [id, setId ] = useState(1);
  const [type , setType ] = useState('Personal'); 

  const [title, setTitle] = useState("");
  const [headerColor, setHeaderColor] = useState("");    
  const [subTitle, setSubTitle] = useState("");
  const [message, setMessage] = useState("");

  const [modalView, setModelView] = useState(false);

    const Message =(ti,cl,ms,st)=>{
      setTitle(ti)
      setHeaderColor(cl)
      setMessage(ms),
      setSubTitle(st)
      setModelView(true)
    }

    const CloseMessage =(ti,cl,ms,st,nav)=>{
      setTitle(ti)
      setHeaderColor(cl)
      setMessage(ms),
      setSubTitle(st)
      setTimeout(() => {
        setModelView(false)
        if (nav==true){
          navigation.navigate('Profile2')
        }
        }, 1000)      
      }


  const setUserType = () =>{
    Message('Loading','#fff','Please Wait','......');

      const formData = new FormData()

      formData.append('id', health.user.id);
      formData.append('type', type);

          fetch(BaseUrl.BASE_URL+'/api/userType', {
          method: 'POST', // or 'PUT'
          body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);
              
            if (data=='error'){ 
              setTimeout(() => CloseMessage('Error','#e25b5b','Please Try Again','Try Again',false), 300);
            }
            else{
              setTimeout(() => CloseMessage('Success','#6bb333','Success','',true), 300);
            }
            health.setUserType(type)
          })
          .catch((error) => {
              
              console.error('Error:', error);
              Message('Error','#e25b5b','Please Try Again','Try Again','',false);
          })  
    
  }

  return (
    <View style={styles.container}>
        <View style={{alignItems:'center',justifyContent:'center',padding:15,position:'absolute',zIndex:999,top:0,width:'100%'}}>
            <Animatable.Text animation={'fadeInLeft'} style={{fontSize:30,fontWeight:'700'}}>Choose</Animatable.Text>
            <Animatable.Text delay={900} animation={'fadeIn'} style={{fontSize:20}}>User Type</Animatable.Text> 
        </View>  
        <View style={styles.viewContainer}>
            
            <View style={{padding:100,alignItems:'center',justifyContent:'center'}}>
                {
                    Users.map((item,index)=>
                    <TouchableHighlight underlayColor={'#6bb333'} style={[buttons.login,{backgroundColor:id==item.id?'#6bb333':'white'}]} onPress={()=>{setId(item.id);setType(item.title)}}>
                        <Text  style={buttons.text}>{item.title}</Text> 
                    </TouchableHighlight>
                    )
                }                
            </View>
            <View style={{padding:50,alignItems:'flex-end'}}>
            <TouchableHighlight onPress={()=>{setUserType()}} underlayColor={'rgba(107, 179, 51,0.7)'} style={buttons.continuebtn}>
                  <View>
                    <Text style={{fontSize:17}}>Continue</Text>
                  </View>
                </TouchableHighlight>
            </View>
        </View>
        <Loader 
                view={modalView}
                title={title}
                message={message}
                headerColor={headerColor}
                subTitle={subTitle}
                />

    </View>
  );
}
