import React, { useState, useEffect, useContext } from 'react'
import { Button, View , Text,TextInput,TouchableHighlight} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import ResponseModal from '../components/ResponseModal';
import { HealthProvider, HealthContext } from '../context/Context';
import {Validation} from '../components/Validation'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactNumber() {

    const navigation = useNavigation();

    const [contact, setContact] = useState( "");    
    const [cVal, setCVal] = useState(false); 

    const [title, setTitle] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [buttonText, setButtonText] = useState("");    
    const [subTitle, setSubTitle] = useState("");
    const [message, setMessage] = useState("");
    const [data, setData] = useState([]);

    const [modalView, setModelView] = useState(false);
    const health = useContext(HealthContext);

    const BaseUrl = require('../styles/BaseUrl');
    const storeUserData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('user', jsonValue)
        } catch (e) {
            // saving error
        }
        }
    const signUp = (cn) =>{
        const formData = new FormData()

        formData.append('contact', cn);
        formData.append('id', health.user.id);
        console.log(cn)

        if (cn==''){
            setCVal(true)
        } 
        else{
            setCVal(false)


        fetch(BaseUrl.BASE_URL+'/api/ContactNumber', {
            method: 'POST', // or 'PUT'
            body: formData
            })
            .then(response => response.json())
            .then(data => {
                setData(data); 
            console.log(data);
            health.setUser(data)
            storeUserData(data)
            Message('Success','#6bb333','Registration successfully completed','Continue',''); 
            
            })
            .catch((error) => {
            console.log(error);
            })
        }
        }

        const Message =(ti,cl,ms,bt,st)=>{
            setTitle(ti)
            setHeaderColor(cl)
            setMessage(ms),
            setButtonText(bt)
            setSubTitle(st)
            setModelView(true)
          }
    return (
      <View style={styles.container}>
          <View style={styles.header}>
             <Ionicons 
                name="arrow-back" 
                size={30} 
                color="black" 
                onPress={() => navigation.goBack()}
             />
             <Text style={{color:'#000',fontSize:22,marginLeft:10}}>Add Contact Number</Text>
          </View>
          
          <View style={[styles.innerContainer,{alignItems:'center'}]}>

          <View style={{alignItems:'center',flexDirection:'row',marginTop:50,marginBottom:20}}>
                            <Ionicons 
                                name="call-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                            <Text style={{position:'absolute',left:60}}>+94</Text>
                    <TextInput
                        style={[styles.inputText,{paddingLeft:80}]}
                        placeholder={'contact Number'}
                        value={contact}
                        onChangeText={(text)=>setContact(text)}
                        onFocus={()=>setCVal(false)} 
                        keyboardType={'phone-pad'}  
                    />
                    
                    {
                        cVal==true?
                            <Validation text={'Contact is Required'} />
                        :
                        null
                    }
                            
                    </View>

                    <TouchableHighlight underlayColor={'#104c2e'} style={[buttons.login,{backgroundColor: '#6bb333',borderColor:'#6bb333',}]} onPress={()=>
                        
                        // navigation.navigate('Login')
                        signUp(contact)
                        }>
                        <Text style={[buttons.text,{color: 'white',}]}>Continue</Text>
                    </TouchableHighlight>
          </View>

          <ResponseModal 
                view={modalView}
                title={title}
                message={message}
                headerColor={headerColor}
                buttonText={buttonText}
                RButton={()=>{
                    
                        return(
                            title=='Error'?
    
                        <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton}
                        onPress={()=>{setModelView(false)}}>
    
                            <Text style={buttons.text}>{buttonText}</Text>
    
                        </TouchableHighlight> 
                        :
                        <TouchableHighlight underlayColor={'#DDDDDD'} style={buttons.modalButton} 
                       
                            onPress={()=>{setModelView(false);
                                parseInt(health.user.position)==3?
                        navigation.navigate('HomeDrawer') 
                        :
                        navigation.navigate('Profile2',{email:health.user.email}) 
                            // ;navigation.navigate('Login')
                            }}>
                            <Text style={buttons.text}>{buttonText}</Text>
                        </TouchableHighlight>  
                        )}
                    
                }
                />
      </View>
    );
  }