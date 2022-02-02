import React, { useEffect, useState ,useRef} from "react";
import {TouchableHighlight, Text, View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {buttons, styles} from '../styles/Styles'

import Ionicons from 'react-native-vector-icons/Ionicons';

import GifImage from '@lowkey/react-native-gif';
import {
    SkypeIndicator,
    MaterialIndicator
  } from 'react-native-indicators';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Loader = ({
  title,
  message,
  headerColor,
  view,
}) => {

    const toggleModal = () => {
        return !view;
      }
    
    const [modalView, setModelView] = useState(view);

  return (
    <Modal 
    isVisible={view || modalView}
    // isVisible={false}
    animationIn={'zoomIn'}
    animationOut={'zoomOut'}
    style={{alignItems:'center',justifyContent: 'center',}}
    >
        <View style={{backgroundColor:headerColor,height:50,width:windowWidth-40,borderTopRightRadius:10,borderTopLeftRadius:10,marginBottom:-10,zIndex:2,alignItems:'center',justifyContent: 'center',}} >
            {title=='Error'?
            <Ionicons 
                name="close-circle-outline" 
                size={35} 
                color="white" 
                style={{zIndex:2}}
             /> 
             
             :title=='Loading'?
            <View><MaterialIndicator size={27} color='#6bb333' /></View>
             :
             <Ionicons 
                name="checkmark-circle-outline" 
                size={35} 
                color="white" 
                style={{zIndex:2}}
             /> 
            }
        </View>

        <View style={{backgroundColor:'white',width:windowWidth-40,padding:10,paddingTop:25,borderRadius:10,alignItems:'center'}}>

        <Text style={{fontSize:18,fontWeight:'bold',color:'#333333'}}>
          {title}
          </Text>
        <Text style={{fontSize:14,padding:5,color:'#a6a6a6'}}>{message}</Text>
        {/* <View style={styles.divider} /> */}
        {/* <RButton/> */}


        </View>
    </Modal>
  );
};
export default Loader;