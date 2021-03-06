import React, { useState, useContext } from 'react'
import { Button, View , Text, ScrollView, Dimensions,TextInput, TouchableHighlight, Linking, Image} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { buttons, styles } from '../styles/Styles';
import { HealthProvider, HealthContext } from '../context/Context';
import ResponseModal from '../components/ResponseModal';
import {Validation} from '../components/Validation'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contact() {

    const health = useContext(HealthContext);

    const [name, setName] = useState( ""); 
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState( "");
    
    
    const [nv, setNv] = useState(false); 
    const [ev, setEv] = useState(false); 
    const [mv, setMv] = useState(false); 

    const navigation = useNavigation();

    const BaseUrl = require('../styles/BaseUrl'); 

    const [title, setTitle] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [buttonText, setButtonText] = useState("");    
    const [subTitle, setSubTitle] = useState("");
    const [message2, setMessage2] = useState("");

    const [modalView, setModelView] = useState(false);

    const send = () =>{

      if(name=='' && email==''&& message==''){
        setNv(true)
        setEv(true)
        setMv(true)
      }
      else if(name=='' && email==''){
        setNv(true)
        setEv(true)
        setMv(false)
      }
      else if(name=='' && message==''){
        setNv(true)
        setEv(false)
        setMv(true)
      }
      else if(email==''&& message==''){
        setNv(false)
        setEv(true)
        setMv(true)
      }
      else if(name==''){
        setNv(true)
        setEv(false)
        setMv(false)
      }
      else if( email==''){
        setNv(false)
        setEv(true)
        setMv(false)
      }
      else if( message==''){
        setNv(false)
        setEv(false)
        setMv(true)
      }
      else{
        setNv(false)
        setEv(false)
        setMv(false)
      const formData = new FormData()

      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

          fetch(BaseUrl.BASE_URL+'/api/Messages', {
          method: 'POST', // or 'PUT'
          body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);
              if(data==true){
               reset()  
               Message('Success','#6bb333','Successfully Sent Message. We will reply to your email soon','Ok','Welcome!')
              }
             else{
              Message('Error','#e25b5b','Message not sent. Please fill all the fields','try Again','Welcome!');
             }
              
              
              // health.setUser(data)
                  // storeUserData(data)
              // navigation.navigate('SelectStack')
          })
          .catch((error) => {
              
              console.error('Error:', error);
              
          })   
      }
    }
      const Message =(ti,cl,ms,bt,st)=>{
        setTitle(ti)
        setHeaderColor(cl)
        setMessage2(ms),
        setButtonText(bt)
        setSubTitle(st)
        setModelView(true)
      }
      const reset = ()=>{
        setEmail('')
        setName('')
        setMessage('')
      }

    return (
      <View style={styles.container}>
            <Ionicons 
                name="menu-outline" 
                size={30} 
                color="white" 
                style={{zIndex:1,position:'absolute',top:10,left:10,elevation:5}}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        <View style={styles.newHeader}>
 
            <Text style={[styles.headerText,{marginLeft:20,marginTop:5}]}>Contact Us</Text>
        </View>

        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <View style={{height:windowHeight/2,justifyContent:'space-between',padding:15}}>
        <Image source={require('../assets/contact.png')} style={{height:120,width:120,resizeMode:'contain',alignSelf:'center',marginTop:80}} />
        <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10}}>
          <View style={{flexDirection:'row'}}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#fff"
            />
            <View style={{marginLeft:5}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Email</Text>
            <Text style={{color:'#fff'}} onPress={()=>Linking.openURL('mailto:info@goodseeds.com')}>info@goodseeds.com</Text>   
            </View>         
          </View>

          <View style={{flexDirection:'row'}}>
            <Ionicons
              name="phone-portrait-outline"
              size={20}
              color="#fff"
            />
            <View style={{marginLeft:5}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Phone</Text>
            <Text style={{color:'#fff'}} onPress={()=>Linking.openURL('tel:+94 772 674 437')}>(+94)772 674 437</Text>
            </View>         
          </View>
            
          </View>
          </View>

            <View style={styles.contactView}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TextInput
                    style={styles.inputText2}
                    placeholder={'Name'}
                    value={name}
                    onChangeText={(text)=>setName(text)}
                />
                {
                  nv==true?
                  <Validation text={'Name is Required'} />
                  :
                  null
                }
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TextInput
                    style={styles.inputText2}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                />
                {
                  ev==true?
                  <Validation text={'Email is Required'} />
                  :
                  null
                }
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TextInput
                    style={[styles.inputText2,{height:'auto'}]}
                    placeholder={'Message'}
                    value={message}
                    multiline={true}
                    numberOfLines={3}
                    textAlignVertical={'top'}
                    onChangeText={(text)=>setMessage(text)}
                />
                {
                  mv==true?
                  <Validation text={'Message is Required'} />
                  :
                  null
                }
                </View>
                <TouchableHighlight onPress={()=>send()} style={{backgroundColor:'green',alignSelf:'center',height:45,width:45,borderRadius:50,alignItems:'center',justifyContent:'center',margin:15}}>
                <FontAwesome 
                    name="send" 
                    size={20} 
                    color="white" 
                /> 
                </TouchableHighlight>
            </View>
            <ResponseModal 
                view={modalView}
                title={title}
                message={message2}
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
                    onPress={()=>{setModelView(false)
                    }}>
                        <Text style={buttons.text}>{buttonText}</Text>
                    </TouchableHighlight>   
                    )}
                    
                }
                />

        </ScrollView>
      </View>
    );
  }