import React, { useEffect, useState ,useRef} from "react";
import {TouchableHighlight, Text, View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {buttons, styles} from '../styles/Styles'

import Ionicons from 'react-native-vector-icons/Ionicons';

import GifImage from '@lowkey/react-native-gif';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ResponseModal = ({
  title,
  subTitle,
  message,
  buttonText,
//   screen,
  headerColor,
  view,
  RButton
}) => {

    const toggleModal = () => {
        return !view;
      }
    
    // useEffect(() => {
    //     setModelView(view)
    // }, [])
    const [modalView, setModelView] = useState(view);

  return (
    <Modal 
    isVisible={view || modalView}
    style={{alignItems:'center',justifyContent: 'center',}}
    >
        <View style={{backgroundColor:headerColor,height:50,width:windowWidth-40,borderTopRightRadius:10,borderTopLeftRadius:10,marginBottom:-10,zIndex:2,alignItems:'center',justifyContent: 'center',}} >
            {/* <Text style={{color:'white',fontSize:17}}>{title}</Text> */}
            {title=='Success'?
            <Ionicons 
                name="checkmark-circle-outline" 
                size={35} 
                color="white" 
                style={{zIndex:2}}
                // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
            // <GifImage
            //     source={require('../assets/ok2.gif')}
            //     // source={{
            //     //   uri:
            //     //     'https://media.tenor.com/images/1c39f2d94b02d8c9366de265d0fba8a0/tenor.gif',
            //     // }} 
            //     style={{
            //       width: 100,
            //       height: 100,
            //     }}
            //     resizeMode={'cover'}
            //     // paused={true}
            //   />
             
             :
             <Ionicons 
                name="close-circle-outline" 
                size={35} 
                color="white" 
                style={{zIndex:2}}
                // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
            }
        </View>

        <View style={{backgroundColor:'white',width:windowWidth-40,padding:10,paddingTop:25,borderRadius:10,alignItems:'center'}}>

        <Text style={{fontSize:18,fontWeight:'bold',color:'#333333'}}>
          {/* WelcAome */}
          {title}
          {/* {subTitle} */}
          </Text>
        <Text style={{fontSize:14,padding:5,color:'#a6a6a6'}}>{message}</Text>
        <View style={styles.divider} />
        <RButton/>


        </View>
    </Modal>
  );
};
export default ResponseModal;