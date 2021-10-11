import React, { useState, useEffect ,useContext} from 'react'
import { Button, View ,Text, StatusBar, TouchableHighlight, TextInput, Keyboard} from 'react-native'
import {buttons, styles} from '../styles/Styles'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';

import ResponseModal from '../components/ResponseModal';

import {Validation} from '../components/Validation'

import { HealthContext } from '../context/Context';

import { Background , WelcomeBackground } from '../styles/Background';


export default function Login() {
  
    const health = useContext(HealthContext);

  const navigation = useNavigation();

  const BaseUrl = require('../styles/BaseUrl');

    const [name, setName] = useState( "");  
    const [pw, setPw] = useState( ""); 
    const [userInfo, setUserInfo] = useState([]);
    const [user, setUser] = useState({})
    
    const [eVal, setEVal] = useState(false); 
    const [pVal, setPVal] = useState(false);

    const [ps, setPS] = useState(true); 
     
    const [pView, setPView] = useState(false); 

    const [title, setTitle] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [buttonText, setButtonText] = useState("");    
    const [subTitle, setSubTitle] = useState("");
    const [message, setMessage] = useState("");

    const [modalView, setModelView] = useState(false);

    const Message =(ti,cl,ms,bt,st)=>{
        setTitle(ti)
        setHeaderColor(cl)
        setMessage(ms),
        setButtonText(bt)
        setSubTitle(st)
        setModelView(true)
      }

    const storeUserData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
        // saving error
    }
    }
    const login = (em,key) =>{
        const formData = new FormData()
        // const data = { email: em,password: key,re_password:rp};

        formData.append('email', em);
        formData.append('password', key);

        if (em=='' && key==''){
            setEVal(true)
            setPVal(true)
        }
        else if (em==''){
            setEVal(true)
            setPVal(false)
        }
        else if (key==''){
            setEVal(false)
            setPVal(true)
        }
        else{
            fetch(BaseUrl.BASE_URL+'/api/login', {
            method: 'POST', // or 'PUT'
            body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data=='email'){
                    Message('Error','#e25b5b','Check the Email','Try Again','');
                }
                else if (data=='password'){
                    Message('Error','#e25b5b','Check The Password','Try Again','');
                }
                else{
                    Message('Success','#6bb333','Logged Successfully','Ok','Welcome!');
                    health.setUser(data)
                    storeUserData(data)
                }
                // navigation.navigate('SelectStack')
            })
            .catch((error) => {
                
                console.error('Error:', error);
                
            })   
        }
      
    }



    useEffect(() => {
        
      }, [])


    



    return (
        <View style={[styles.container,{backgroundColor:'#90b0b5'}]}>
            <StatusBar backgroundColor={'#4b937c'} />
            <Animatable.View 
                style={{flex:1}}
                animation={'bounceInDown'}
            >
                {/* <LinearGradient colors={['#4b937c', '#709c97', '#90b0b5']} style={[styles.linearGradient,{alignItems:'center'}]}> */}
                    <WelcomeBackground>
                    <View style={[styles.header,{elevation:0,justifyContent:'space-between',backgroundColor: 'transparent',}]}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="white" 
                onPress={() => navigation.goBack()}
             />

              </View>

              <ResponseModal 
                view={modalView}
                title={title}
                message={message}
                headerColor={headerColor}
                buttonText={buttonText}
                subTitle={subTitle}
                RButton={()=>{
                    return(
                        title=='Error'?

                    <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton}
                    onPress={()=>{setModelView(false)}}>

                        <Text style={buttons.text}>{buttonText}</Text>

                    </TouchableHighlight> 
                    :
                    <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton} 
                    onPress={()=>{
                    setModelView(false);
                    parseInt(health.user.position)==3?
                        navigation.navigate('HomeDrawer') 
                        :
                        navigation.navigate('Profile2',{email:name}) 
                    }}>
                        <Text style={buttons.text}>{buttonText}</Text>
                    </TouchableHighlight>  
                    )}
                    
                }
                />

                    
                    {/* <Animatable.View style={styles.loginpic}>
                        <Image source={require('../assets/user.png')} style={{width:60,height:60,tintColor:'#255c43'}} />
                    </Animatable.View> */}

                    <Animatable.View animation={'slideInUp'} style={styles.loginBoard2}>
                    <Text style={{color:'#4b937c',fontSize:30,paddingBottom:5,textAlign:'left',paddingLeft:20}} delay={300} animation={'bounceIn'}>
                        Login
                    </Text>
                    <Text style={{color:'#6a7075',fontSize:16,paddingBottom:10,textAlign:'left',paddingLeft:20}} delay={300} animation={'bounceIn'}>
                        Please Login to Your Account
                    </Text>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Ionicons 
                                name="mail-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                            <TextInput
                                style={styles.inputText}
                                placeholder={'E-mail Address'}
                                value={name}
                                onChangeText={(text)=>setName(text)}
                                onFocus={()=>setEVal(false)}
                                autoFocus={true}
                            />
                            
                            {
                                eVal==true?
                                    <Validation text={'Email is Required'} />
                                :
                                null
                            }
                        </View>
                    
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Ionicons 
                                name="lock-closed-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Password'}
                        value={pw}
                        onChangeText={(text)=>setPw(text)}
                        onFocus={()=>{setPVal(false),setPView(true)}}
                        onBlur={()=>setPView(false)}
                        secureTextEntry={ps}
                    />
                    {
                                pView==true?
                                ps==true?
                                <Ionicons 
                                            name="eye" 
                                            size={20} 
                                            color="gray" 
                                            style={{marginLeft:-35,marginRight:15}}
                                            onPress={()=>setPS(false)}
                                        />
                                        :
                                        <Ionicons 
                                            name="eye-off" 
                                            size={20} 
                                            color="gray" 
                                            style={{marginLeft:-35,marginRight:15}}
                                            onPress={()=>setPS(true)}
                                        />

                                        :
                                        null
                            }
                    {
                        pVal==true?
                            <Validation text={'Password is Required'} />
                        :
                        null
                    }
                    </View>

                    <TouchableHighlight  underlayColor={'#104c2e'} style={[buttons.login,{backgroundColor: '#6bb333',borderColor:'#6bb333'}]} onPress={()=>{Keyboard.dismiss(),login(name,pw)}}>
                        <Text style={[buttons.text,{color:'white'}]}>Login</Text>
                    </TouchableHighlight>
                    
                    <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',paddingTop:10,justifyContent:'space-around'}}>
                        <Text>Haven't any account?   </Text>
                        <TouchableHighlight underlayColor={'#DDDDDD'} onPress={()=>navigation.navigate('SignUp')}>
                            <Text style={{color:'red'}}>Sign Up</Text>
                        </TouchableHighlight>
                    </View>

                    </Animatable.View>
                    </WelcomeBackground>
                {/* </LinearGradient>   */}
            </Animatable.View>
            
            
        </View>
    )
}
