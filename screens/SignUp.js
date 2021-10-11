import React, { useState, useEffect } from 'react'
import { Button, View ,Text, StatusBar, TouchableHighlight, TextInput, Image, Dimensions} from 'react-native'
import {buttons, styles} from '../styles/Styles'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { get as getCookie} from 'browser-cookies'
import CookieManager from '@react-native-cookies/cookies';
import ResponseModal from '../components/ResponseModal';
import { Background , WelcomeBackground } from '../styles/Background';

import {Validation} from '../components/Validation'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignUp() {

    const [name, setName] = useState( "");  
    const [pw, setPw] = useState( "");
    const [repw, setRePW] = useState( "");

    
    const [eVal, setEVal] = useState(false); 
    const [pVal, setPVal] = useState(false); 
    const [rpVal, setRPVal] = useState(false); 

    // const [es, setES] = useState(false); 
    const [ps, setPS] = useState(true); 
    const [rps, setRPS] = useState(true);
    
    // const [eView, setEView] = useState(false); 
    const [pView, setPView] = useState(false); 
    const [rpView, setRPView] = useState(false); 

    const [title, setTitle] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [buttonText, setButtonText] = useState("");   
    const [subTitle, setSubTitle] = useState("");
    const [message, setMessage] = useState("");

    const [modalView, setModelView] = useState(false);

    const BaseUrl = require('../styles/BaseUrl');
    
    const signUp = (em,key,rp) =>{
        const formData = new FormData()
        const data = { email: em,password: key,re_password:rp};

        formData.append('email', em);
        formData.append('password', key);
        formData.append('re_password', rp);

        fetch(BaseUrl.BASE_URL+'/api/signUp', {
            method: 'POST', // or 'PUT'
            body: formData
            })
            .then(response => response.json())
            .then(data => {
            // getuserData(); 
            // console.log(data);
            
            // if(data='already'){
            //     Message('Error','red','User Already Registerd','Try Again')
            // } 
            if(data.email=='' && data.password=='' && data.re_password==''){
                setEVal(true)
                setPVal(true)
                setRPVal(true)
            }
            else if (data.password=='' && data.re_password==''){
                setEVal(false)
                setPVal(true)
                setRPVal(true)
            }
            else if (data.email=='' && data.re_password==''){
                setEVal(true)
                setPVal(false)
                setRPVal(true)
            }
            else if (data.email=='' && data.password==''){
                setEVal(true)
                setPVal(true)
                setRPVal(false)
            }
            else if (data.email==''){
                setEVal(true)
                setPVal(false)
                setRPVal(false)
            }
            else if (data.password==''){
                setEVal(false)
                setPVal(true)
                setRPVal(false)
            }
            else if (data.re_password==''){
                setEVal(false)
                setPVal(false)
                setRPVal(true)
            } 

            else if(data=='already'){
                Message('Error','#e25b5b','User Already Registerd','Try Again','')
                setEVal(false)
                setPVal(false)
                setRPVal(false)
            } 
            
            else{
                Message('Success','#6bb333','User Register Successfully','Login','');
                setEVal(false)
                setPVal(false)
                setRPVal(false)
            }
            
            
            })
            .catch((error) => {
            console.log(error);
            })
        }



      useEffect(() => {

  

      }, [])

      const Message =(ti,cl,ms,bt,st)=>{
        setTitle(ti)
        setHeaderColor(cl)
        setMessage(ms),
        setButtonText(bt)
        setSubTitle(st)
        setModelView(true)
      }

    const navigation = useNavigation();

    return (
        <View style={[styles.container,{backgroundColor:'#90b0b5'}]}>
            <StatusBar backgroundColor={'#4b937c'} />
            
            <Animatable.View 
                style={{flex:1}}
                animation={'bounceInDown'}
            >
                <WelcomeBackground>

                <View style={[styles.header,{backgroundColor: 'transparent',}]}>
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
                RButton={()=>{
                //     return(
                //         title=='Error'?
                //       <TouchableHighlight style={{alignSelf:'flex-end',borderWidth:1,paddingHorizontal:15,paddingVertical:2,borderRadius:5}} onPress={()=>{setModelView(false)}}>
                //         <Text style={buttons.text}>{buttonText}</Text>
                //     </TouchableHighlight> :
                //     <TouchableHighlight style={{alignSelf:'flex-end',borderWidth:1,paddingHorizontal:15,paddingVertical:2,borderRadius:5}} onPress={()=>{setModelView(false);navigation.navigate('Login')}}>
                //     <Text style={buttons.text}>{buttonText}</Text>
                // </TouchableHighlight>  
                //     )}

                    
                        return(
                            title=='Error'?
    
                        <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton}
                        onPress={()=>{setModelView(false)}}>
    
                            <Text style={buttons.text}>{buttonText}</Text>
    
                        </TouchableHighlight> 
                        :
                        <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton} 
                       
                            onPress={()=>{setModelView(false);navigation.navigate('Login')}}>
                            <Text style={buttons.text}>{buttonText}</Text>
                        </TouchableHighlight>  
                        )}
                    
                }
                />

                    {/* <Animatable.Text style={{color:'#4b937c',fontSize:30,padding:10,textAlign:'center'}} delay={300} animation={'bounceIn'}>
                        Sign Up
                    </Animatable.Text> */}
                    {/* <Animatable.View style={styles.loginpic}>
                        <Image source={require('../assets/user.png')} style={{width:60,height:60,tintColor:'#255c43'}} />
                    </Animatable.View> */}
                    <View style={styles.loginBoard2}>
                    <Text style={{color:'#4b937c',fontSize:30,paddingBottom:5,textAlign:'left',paddingLeft:20}} delay={300} animation={'bounceIn'}>
                        Register Now
                    </Text>
                    <Text style={{color:'#6a7075',fontSize:16,paddingBottom:10,textAlign:'left',paddingLeft:20}} delay={300} animation={'bounceIn'}>
                        Please Enter Details
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

                    <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Ionicons 
                                name="lock-closed-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Re-Type Password'}
                        value={repw}
                        onChangeText={(text)=>setRePW(text)}
                        onFocus={()=>{setRPVal(false),setRPView(true)}}
                        onBlur={()=>setRPView(false)} 
                        secureTextEntry={rps} 
                    />
                    {
                    rpView==true?
                    rps==true?
                    <Ionicons 
                                name="eye" 
                                size={20} 
                                color="gray" 
                                style={{marginLeft:-35,marginRight:15}}
                                onPress={()=>setRPS(false)}
                            />
                            :
                            <Ionicons 
                                name="eye-off" 
                                size={20} 
                                color="gray" 
                                style={{marginLeft:-35,marginRight:15}}
                                onPress={()=>setRPS(true)}
                            />

                            :
                            null
                        }

                     {
                        rpVal==true?
                            <Validation text={'Re-Password is Required'} />
                        :
                        null
                    }
                    </View>

                    <TouchableHighlight underlayColor={'#104c2e'} style={[buttons.login,{backgroundColor: '#6bb333',borderColor:'#6bb333',}]} onPress={()=>
                        
                        // navigation.navigate('Login')
                        signUp(name,pw,repw)
                        }>
                        <Text style={[buttons.text,{color: 'white',}]}>Sign Up</Text>
                    </TouchableHighlight>

                    </View>
                    </WelcomeBackground> 
            </Animatable.View>
            
            
        </View>
    )
}
