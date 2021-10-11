import React, { useState, useEffect } from 'react'
import { Button, View , Text, ScrollView,TextInput, TouchableHighlight, Linking, Image} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { buttons, styles } from '../styles/Styles';

export default function Contact() {

    const [name, setName] = useState( ""); 
    const [email, setEmail] = useState( ""); 
    const [message, setMessage] = useState( ""); 

    const navigation = useNavigation();

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
 
            <Text style={[styles.headerText,{marginLeft:40,marginTop:0}]}>Contact Us</Text>
        </View>

        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <Image source={require('../assets/contact.png')} style={{height:120,width:120,resizeMode:'contain',alignSelf:'center',marginTop:50}} />
        <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
          <View style={{flexDirection:'row'}}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#fff"
            />
            <View style={{marginLeft:5}}>
            <Text style={{color:'#fff',fontWeight:'bold'}}>Email</Text>
            <Text style={{color:'#fff'}} onPress={()=>Linking.openURL('mailto:info@enewstag.com')}>info@enewstag.com</Text>   
            </View>         
          </View>

          <View style={{flexDirection:'row'}}>
            <Ionicons
              name="phone-portrait-outline"
              size={20}
              color="#fff"
            />
            <View style={{marginLeft:5}}>
            <Text style={{color:'#fff',fontWeight:'bold'}}>Phone</Text>
            <Text style={{color:'#fff'}} onPress={()=>Linking.openURL('tel:+9470 585 8000')}>+9470 585 8000</Text>
            </View>         
          </View>
            
          </View>

            <View style={styles.contactView}>
                <TextInput
                    style={styles.inputText2}
                    placeholder={'Name'}
                    value={name}
                    onChangeText={(text)=>setName(text)}
                />
                <TextInput
                    style={styles.inputText2}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput
                    style={[styles.inputText2,{height:'auto'}]}
                    placeholder={'Message'}
                    value={message}
                    multiline={true}
                    numberOfLines={3}
                    textAlignVertical={'top'}
                    onChangeText={(text)=>setMessage(text)}
                />

                <TouchableHighlight style={{backgroundColor:'green',alignSelf:'center',height:45,width:45,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                <FontAwesome 
                    name="send" 
                    size={20} 
                    color="white" 
                /> 
                </TouchableHighlight>
            </View>

        </ScrollView>
      </View>
    );
  }