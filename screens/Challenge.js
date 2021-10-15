import React, {useRef, useState,useEffect,useContext} from 'react';
import { TouchableHighlight, View , Text , Image,TouchableOpacity} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import { HealthProvider, HealthContext } from '../context/Context';
import RBSheet from "react-native-raw-bottom-sheet";

import { Background } from '../styles/Background';
export default function Challenge() {

    const navigation = useNavigation();
    
    const health = useContext(HealthContext);
    
    const refRBSheet = useRef();

    return (
      <View style={styles.container}>
          <View style={styles.header}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
             <Text style={{color:'black',fontSize:22,marginLeft:10}}>Challenge to Friends</Text>
          </View>
          
          {/* <Background> */}
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

               <View style={{backgroundColor: 'rgba(107, 179, 51,0.1)',marginTop:70,paddingHorizontal:15,paddingVertical:10,width:'90%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               
               <View style={{flexDirection:'row'}}>
                  <TouchableOpacity 
                     style={[buttons.profileBitton,{marginRight:10,backgroundColor:'rgba(255,255,255,0.5)',alignSelf:'center'}]} 
                     onPress={()=>{navigation.navigate('Profile')}}>
                     <View style={buttons.profileBitton}>
                        
                     </View>
                  </TouchableOpacity>
                  <View>
                     <Text style={{fontSize:17}}>{health.user.email}</Text>
                     <Text style={{fontSize:15,color:'gray'}}>{health.user.email}</Text>
                  </View>
               </View>
               
               <TouchableOpacity onPress={()=>refRBSheet.current.open()} style={{backgroundColor:'white',paddingHorizontal:15,paddingVertical:5,borderRadius:15}}>
                  <View>
                     <Text>Add Friends</Text>
                  </View>
               </TouchableOpacity>   
               </View>

               <Image source={require('../assets/run.png')} style={{height:'50%',resizeMode:'contain',margin:15}} />
               <TouchableHighlight underlayColor={'rgba(107, 179, 51,0.7)'} onPress={()=>{navigation.navigate('Home')}} style={{padding:10,paddingHorizontal:15,borderRadius:25,backgroundColor:'rgba(107, 179, 51,0.1)'}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={require('../assets/next.gif')} style={{width:'40%',height:'80%'}} />
                     <Text style={{color:'black',fontSize:17}}>Challenge</Text>
                  </View>
               </TouchableHighlight>
            </View>
            
            <RBSheet
               ref={refRBSheet}
               closeOnDragDown={true}
               closeOnPressMask={false}
               customStyles={{
                  wrapper: {
                     backgroundColor: "rgba(0,0,0,0.15)",
                     zIndex:1
                  },
                  draggableIcon: {
                     backgroundColor: "#000"
                  },
                  container:styles.bottomSheet
               }}
               closeOnPressBack={true}
               animationType={'slide'}
               closeOnPressMask={true}
            >
               <View style={{padding:20}}>
               <Text style={{fontSize:17}}>Friends You Know</Text>
               </View>

            </RBSheet>
          {/* </Background> */}
        
      </View>
    );
  }