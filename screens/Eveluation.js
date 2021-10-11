import React, {useRef, useState,useContext} from 'react';
import { Dimensions, View , Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import StepIndicator from 'react-native-step-indicator';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { HealthContext } from '../context/Context';

import * as Animatable from 'react-native-animatable';

import {RadioButton} from 'react-native-paper';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

import AsyncStorage from '@react-native-async-storage/async-storage';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: windowWidth} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 90;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default function Eveluation() {
    const BaseUrl = require('../styles/BaseUrl');
    // const route = useRoute();
    const radio_props = [
      {label: 'D', value: 'daily' },
      {label: 'W', value: 'weekly' },
      {label: 'O', value: 'occationally' }
    ];
   const health = useContext(HealthContext);

    const [isLoading, setLoading] = useState(true);
    const [datas, setData] = useState([]);
  
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [grade, setGrade] = useState('');
    const [classNumber, setClassNumber] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [parent, setParent] = useState('');
    const [waist, setWaist] = useState('');
  
    const [fphone, setFatherPhone] = useState('');
    const [mphone, setMotherPhone] = useState('');
    const [guardphone, setGuardianPhone] = useState('');
    const [conperson, setConPerson] = useState('');
    const [email, setEmail] = useState('');
  
    const [valuebreak, setBreakValue] = React.useState('first');
    const [valuelunch, setLunchValue] = React.useState('first');
    const [valuedinner, setDinnerValue] = React.useState('first');
  
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dobs, setDobs] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [Enable, setEnable] = useState('courses');
  
    const [valueBread, setBreadValue] = React.useState('first');
    const [valueKottu, setKottuValue] = React.useState('first');
    const [valueEgg, seteggValue] = React.useState('first');
    const [valueParata, setParataValue] = React.useState('first');
    const [valueFlavord, setFlavoredValue] = React.useState('first');
    const [valueInstant, setInstantValue] = React.useState('first');
    const [valueBurger, setBurgerValue] = React.useState('first');
    const [valuePitza, setPitzaValue] = React.useState('first');
    const [valueFrench, setFrenchValue] = React.useState('first');
    const [valueHeat, setheatValue] = React.useState('first');
    const [valuePast, setPastaValue] = React.useState('first');
    const [valueCracker, setCrackerValue] = React.useState('first');
    const [valueColas, setColasValue] = React.useState('first');
    const [valueChoco, setchocoValue] = React.useState('first');
    const [valueSweet, setSweetValue] = React.useState('first');
    const [valueIceCream, setIceCreamValue] = React.useState('first');
    const [valueTea, setTeaValue] = React.useState('first');
  
  
    const [valueBuns, setBunsValue] = React.useState('first');
    const [valuePastry, setPastryValue] = React.useState('first');
    const [valuBusict, setBusictValue] = React.useState('first');
    const [valueCookies, setCookiesValue] = React.useState('first');
    const [valueDonuts, setDonutsValue] = React.useState('first');
    const [valueCake, setCakeValue] = React.useState('first');
    const [valueSoya, setSoyaValue] = React.useState('first');
    const [valuePotato, setPotatoValue] = React.useState('first');
    const [valueSossage, setSossageValue] = React.useState('first');
    const [valueMeatboal, setMeatboalValue] = React.useState('first');
    const [valueFridChickn, setFridChicknValue] = React.useState('first');
    const [valueCanned, setCannedValue] = React.useState('first');
    const [valueVegi, setVegiValue] = React.useState('first');
    const [valueMagarin, setMagarinValue] = React.useState('first');
    const [valueCerial, setCerialValue] = React.useState('first');
    const [valueYourgat, setYourgatValue] = React.useState('first');
    const [valueNutrion, setNutrionValue] = React.useState('first');
    const [valueSupp, setSuppValue] = React.useState('first');
  
    const [valueplayF, setPlayFValue] = React.useState('first');
    const [valueGym, setGymValue] = React.useState('first');
    const [valuSwim, setSwimValue] = React.useState('first');
    const [valueCycle, setCycleValue] = React.useState('first');

    const [valueHaveFriends, setHaveFriendValue] = React.useState('first');
    const [valuePlayFriends, setPlayFriendsValue] = React.useState('first');
    const [valueIndoor, setIndoorValue] = React.useState('first');    
    const [valueaccept, setAcceptValue] = React.useState('first');
    const [valuTution, setTutionValue] = React.useState('first');
    const [valueParentWork, setParentWorkValue] = React.useState('first');

    const [value5, setValue5] = useState(null);

    
    
    const [basic, setBasic] = useState(null);
    const [contact, setContact] = useState(null);

    
    const [ch1, setCh1] = useState(null);
    const [ch2, setCh2] = useState(null);
    const [ch3, setCh3] = useState(null);

    
    const [ph1, setPh1] = useState(null);
    const [ph2, setPh2] = useState(null);

  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [selectedValue, setSelectedValue] = useState('java');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    const DateText = moment(currentDate).format('YYYY-MM-DD');
    setDate(currentDate);
    setDobs(DateText);
    console.log('>>>>>>>>>>>>>>>>>>>> : ' + DateText);
  };
  const pickerRef = useRef();

  function close() {
    pickerRef.current.blur();
  }

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const basicDetails = (
    name,
    dob,
    grade,
    classNumber,
    height,
    weight,
    waist,
    parent,
  ) => {
 
    const formData = new FormData()

    formData.append('name', name);
    formData.append('email', health.user.email);
    formData.append('dob', dob);
    formData.append('grade', grade);
    formData.append('class_number', classNumber);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('parent_name', parent);
    formData.append('waist_size', waist);


    fetch(BaseUrl.BASE_URL+'/api/basicDetails/', {
      method: 'POST', // or 'PUT'
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        health.setUser(data);
        setBasic(true)
        storeUserData(data)
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const food_consumption = () => {
   

    const formData = new FormData()

    formData.append('breackfast', valuebreak);
    formData.append('lunch', valuelunch);
    formData.append('dinner', valuedinner);

    fetch(BaseUrl.BASE_URL+'/api/foodConsumption/'+health.user.member_id, {
      method: 'POST', // or 'PUT'
    
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Alert.alert('Insert success');
        console.log('Success:', data);
        setCh1(true)
        storeUserData(data)
        health.setUser(data);
      })
      .catch(error => {
        // Alert.alert('Insert success');
        console.error('Error:', error);
      });
  };

  const wheat_rice_flour = () => {

    const formData = new FormData()

    formData.append('bread', valueBread);
    formData.append('koththu', valueKottu);
    formData.append('egg_roti', valueEgg);
    formData.append('parata', valueParata);
    formData.append('flavoure_rice', valueFlavord);
    formData.append('noodles', valueInstant);
    formData.append('burgers', valueBurger);
    formData.append('french_rice', valueFrench);
    formData.append('heat_items', valueHeat);
    formData.append('pasta', valuePast);
    formData.append('crackers', valueCracker);
    formData.append('cola', valueColas);
    formData.append('chocolate', valueChoco);
    formData.append('sweet_drinks', valueSweet);
    formData.append('ice_crean', valueIceCream);
    formData.append('tea_coffee', valueTea);
    formData.append('pitza', valuePitza);


    fetch(BaseUrl.BASE_URL+'/api/WeatRiceFlour/'+health.user.member_id, {
      method: 'POST', // or 'PUT'
     
      body:formData,
    })
      .then(response => response.json())
      .then(data => {
        // Alert.alert('Insert success');
        console.log('Success:', data);
        setCh2(true)
        storeUserData(data)
        health.setUser(data);
      })
      .catch(error => {
        // Alert.alert('Insert success');
        console.error('Error:', error);
      });
  };

  const contactDetails = (fphone, mphone, guardphone, conperson, email) => {

    const formData = new FormData()

    formData.append('father_mobile', fphone);
    formData.append('mother_mobile', mphone);
    formData.append('contact_email', email);
    formData.append('guardian_mobile', guardphone);
    formData.append('contactable_mobile', conperson);

    fetch(BaseUrl.BASE_URL+'/api/contactDetails/'+health.user.member_id, {
      method: 'POST', // or 'PUT'
      
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setContact(true)
        storeUserData(data)
        health.setUser(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fodConsumption =() => {
    const formData = new FormData()

    formData.append('buns', valueBuns);
    formData.append('pastry', valuePastry);
    formData.append('busicuits', valuBusict);
    formData.append('coockies', valueCookies);
    formData.append('donuts', valueDonuts);
    formData.append('cake', valueCake);
    formData.append('soya', valueSoya);
    formData.append('potatos', valuePotato);
    formData.append('susages', valueSossage);
    formData.append('meatboals', valueMeatboal);
    formData.append('friedchicken', valueFridChickn);
    formData.append('canned_food', valueCanned);
    formData.append('vigetable_oil', valueVegi);
    formData.append('magarin', valueMagarin);
    formData.append('cerial', valueCerial);
    formData.append('yogurt', valueYourgat);
    formData.append('nutrion_bars', valueNutrion);
    formData.append('suppliments', valueSupp);


    fetch(BaseUrl.BASE_URL+'/api/ShortEats/'+health.user.member_id, {
      method: 'POST', // or 'PUT'
     
      body:formData,
    })
      .then(response => response.json())
      .then(data => {
        // Alert.alert('Insert success');
        console.log('Success:', data);
        setCh3(true)
        storeUserData(data)
        health.setUser(data);
      })
      .catch(error => {
        // Alert.alert('Insert success');
        console.log('Error:', formData);
      });
  };

  const physical_activities = () => {
   console.log('clicked')

    const formData = new FormData()

    formData.append('play_with_friends', valueplayF);
    formData.append('gym', valueGym);
    formData.append('swimming', valuSwim);
    formData.append('cycling', valueCycle);

    fetch(BaseUrl.BASE_URL+'/api/physicalActivities/'+health.user.member_id, {
      method: 'POST', // or 'PUT'
    
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Alert.alert('Insert success');
        console.log('Success:', data);
        setPh1(true)
        storeUserData(data)
        health.setUser(data);
        
      })
      .catch(error => {
        // Alert.alert('Insert success');
        console.log('Error:', formData);
      });
  };
  
  const stress = () => {
    console.log('clicked')
 
     const formData = new FormData()
 
     formData.append('home_have_friends', valueHaveFriends);
     formData.append('home_play_friends', valuePlayFriends);
     formData.append('indoor_games', valueIndoor);
     formData.append('not_friends_accept', valueaccept);
     formData.append('tution_class', valuTution);
     formData.append('parents_work', valueParentWork);
 
     fetch(BaseUrl.BASE_URL+'/api/stress/'+health.user.member_id, {
       method: 'POST', // or 'PUT'
     
       body: formData,
     })
       .then(response => response.json())
       .then(data => {
         // Alert.alert('Insert success');
         console.log('Success:', data);
         setPh2(true)
         storeUserData(data)
         health.setUser(data);
       })
       .catch(error => {
         // Alert.alert('Insert success');
         console.log('Error:', formData);
       });
   };

   const position = () => {
  
    // const formData = new FormData()

    // formData.append('breackfast', valuebreak);
    // formData.append('lunch', valuelunch);
    // formData.append('dinner', valuedinner);

    fetch(BaseUrl.BASE_URL+'/api/position/'+health.user.member_id, {
      method: 'PUT', // or 'PUT'
    
      // body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Alert.alert('Insert success');
        console.log('Success:', data);
        // setCh1(true)
        storeUserData(data)
        health.setUser(data);
      })
      .catch(error => {
        // Alert.alert('Insert success');
        console.error('Error:', error);
      });
  };

   const storeUserData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
        // saving error
    }
    }

  // useEffect(() => {
  //   fetch('https://mywebsite.com/endpoint/', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       firstParam: 'yourValue',
  //       secondParam: 'yourOtherValue',
  //     }),
  //   });
  // });

  const selectedItem = {
    title: 'Selected item title',
    description: 'Secondary long descriptive text ...',
  };


    const renderNavBar = () => (
        <View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Ionicons
              name="ios-person-outline"
              size={20}
              color="white"
              style={{marginLeft:10,marginTop:5}}
            //   onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            
            <Text style={{fontSize:15,color:'white',paddingLeft:5}}>{health.user.email}</Text>
        </View>
        <View style={{width:windowWidth,marginTop:10}}>
              {/* <Text style={{padding:20}}>email</Text> */}
             <StepIndicator
                  customStyles={customStylesSmall}
                  currentPosition={parseInt(health.user.position)}
                  labels={labels}
                  stepCount={3}
                  // onPress={()=>setCurrentPosition(currentPosition+1)} 
            />
          </View>
        </View>
      );
      const title = () => {
        return (
          <View style={{width:windowWidth,paddingTop:0}}>
              <Text style={{padding:10,fontSize:20,color:'white'}}>{health.user.email}</Text>
              
             <StepIndicator
                  customStyles={customStyles}
                  currentPosition={parseInt(health.user.position)}
                  labels={labels}
                  stepCount={3}
                  // onPress={()=>setCurrentPosition(currentPosition+1)} 
            />
          </View>
        );
      };
      const labels = ["Personal info","Food Consumption","Physical activities"];
      const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:35,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeWidth: 3,
  
        stepStrokeCurrentColor: '#104c2e',
        stepStrokeFinishedColor: '#104c2e',
        stepStrokeUnFinishedColor: '#a5d982',
  
        separatorFinishedColor: '#104c2e',
        separatorUnFinishedColor: '#a5d982',
        
        stepIndicatorFinishedColor: '#104c2e',
        stepIndicatorUnFinishedColor: '#6bb333',
        stepIndicatorCurrentColor: '#6bb333',
  
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
  
        stepIndicatorLabelCurrentColor: '#104c2e',
        stepIndicatorLabelFinishedColor: '#e7ffd6',
        stepIndicatorLabelUnFinishedColor: '#a5d982',
        
        labelColor: '#a5d982',
        labelSize: 13,
        currentStepLabelColor: '#104c2e'
      }
      const customStylesSmall = {
        stepIndicatorSize: 17,
        currentStepIndicatorSize:25,
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 3,
        stepStrokeWidth: 1,
  
        stepStrokeCurrentColor: '#104c2e',
        stepStrokeFinishedColor: '#104c2e',
        stepStrokeUnFinishedColor: '#a5d982',
  
        separatorFinishedColor: '#104c2e',
        separatorUnFinishedColor: '#a5d982',
        
        stepIndicatorFinishedColor: '#104c2e',
        stepIndicatorUnFinishedColor: '#6bb333',
        stepIndicatorCurrentColor: '#6bb333',
  
        stepIndicatorLabelFontSize: 10,
        currentStepIndicatorLabelFontSize: 13,
  
        stepIndicatorLabelCurrentColor: '#104c2e',
        stepIndicatorLabelFinishedColor: '#e7ffd6',
        stepIndicatorLabelUnFinishedColor: '#a5d982',
        
        labelColor: '#a5d982',
        labelSize: 12,
        currentStepLabelColor: '#104c2e'
      }

      const renderContent = () => {
        return (
          parseInt(health.user.position)==0?
          <Animatable.View animation={'fadeIn'} style={{backgroundColor:'#e5e5e5'}}>
              <View
          style={[styles.cardcontainer, {width: windowWidth-10}]}
          activeOpacity={0.95}>
          <View style={styles.labelContainer}>
            <View>
              <View>
                <Text style={styles.mainText}>Basic Information</Text>
              </View>
              <Text style={styles.labelText}>Full Name</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setName(text)}
                value={name}
                placeholder="Enter name here"
              />
              <Text style={styles.labelText}>Date Of Birth</Text>
              <View>
                <TouchableOpacity
                  style={[
                    styles.labelTextContainer,
                    {
                      padding: 10,
                      width: windowWidth - 43,
                      paddingVertical: 15,
                    },
                  ]}
                  onPress={showDatepicker}>
                  {dobs == '' ? (
                    <Text style={{color: 'gray', marginBottom: -19}}>
                      Select Date of birth
                    </Text>
                  ) : null}
                  <Text>{dobs}</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.labelText}>Grade</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setGrade(text)}
                value={grade}
                placeholder="Enter grade here"
              />
              <Text style={styles.labelText}>Class Number</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setClassNumber(text)}
                value={classNumber}
                placeholder="Enter class number"
              />
              <Text style={styles.labelText}>Height</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setHeight(text)}
                keyboardType="numeric"
                value={height}
                placeholder="Enter height here"
              />
              <Text style={styles.labelText}>Weight</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                keyboardType="numeric"
                onChangeText={text => setWeight(text)}
                value={weight}
                placeholder="Enter weight here"
              />
              <Text style={styles.labelText}>Waist size</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setWaist(text)}
                value={waist}
                placeholder="Enter waist here"
              />
              <Text style={styles.labelText}>
                Name Of Parents / Guardian
              </Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setParent(text)}
                value={parent}
                placeholder="Enter parents here"
              />
            </View>

            <View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
        {basic==true?
          <View
            style={{
              backgroundColor: 'rgba(255,0,0,0.1)',
              borderRadius: 25,
              width: 100,
              padding: 7,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', alignItems: 'center'}}>
              Saved
            </Text>
          </View>
          :
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              borderRadius: 25,
              width: 100,
              padding: 7,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() =>
              basicDetails(
                name,
                dobs,
                grade,
                classNumber,
                height,
                weight,
                waist,
                parent,
              )
            }>
            <Text style={{color: 'white', alignItems: 'center'}}>
              Save
            </Text>
          </TouchableOpacity>
          }
        </View>

        <View
          style={[styles.cardcontainer, {width: windowWidth-10}]}
          activeOpacity={0.95}>
          <View style={styles.labelContainer}>
            <View>
              <View>
                <Text style={styles.mainText}>Contact Information</Text>
              </View>
              <Text style={styles.labelText}>Father Phone Number</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setFatherPhone(text)}
                value={fphone}
                placeholder="Enter Phone number"
              />

              <Text style={styles.labelText}>Mother Phone Number</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setMotherPhone(text)}
                value={mphone}
                placeholder="Enter Phone number"
              />

              <Text style={styles.labelText}>Guardian Phone Number</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setGuardianPhone(text)}
                value={guardphone}
                placeholder="Enter Phone number"
              />
              <Text style={styles.labelText}>
                Contactable person (Father/Mother/Guardian)
              </Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setConPerson(text)}
                value={conperson}
                placeholder="Enter name here"
              />
              <Text style={styles.labelText}>Email address</Text>
              <TextInput
                style={[
                  styles.labelTextContainer,
                  {padding: 10, width: windowWidth - 43, marginBottom: 5},
                ]}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Enter email address"
              />
              {/* <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              /> */}
            </View>
          </View>
        {contact==true?
          <View
            style={{
              backgroundColor: 'rgba(255,0,0,0.1)',
              borderRadius: 25,
              width: 100,
              padding: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', alignItems: 'center'}}>
              Saved
            </Text>
          </View>
          :
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              borderRadius: 25,
              width: 100,
              padding: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() =>
              contactDetails(fphone, mphone, guardphone, conperson, email)
            }>
            <Text style={{color: 'white', alignItems: 'center'}}>
              Save
            </Text>
          </TouchableOpacity>
          }
        </View>

            {basic==null || contact==null?
            <View style={{alignSelf:'flex-end',margin:10,padding:7,paddingHorizontal:15,backgroundColor:'rgba(107,179,51,0.1)',borderRadius:20}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'white'}}>Next</Text>
                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="white"
                    style={{paddingLeft:5}}
                />
              </View>
            </View>
            :
            <TouchableOpacity onPress={()=>position()} style={{alignSelf:'flex-end',margin:10,padding:7,paddingHorizontal:15,backgroundColor:'#6bb333',borderRadius:20}}>
              <View style={{flexDirection:'row'}}>
                  <Text style={{color:'white'}}>Next</Text>
                  <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="white"
                      style={{paddingLeft:5}}
                  />
              </View>
            </TouchableOpacity>
            }
            
          </Animatable.View>
          :
          parseInt(health.user.position)==1?
          <Animatable.View animation={'fadeIn'} style={{backgroundColor:'#e5e5e5'}}>
              <View
                style={[styles.cardcontainer, {width: windowWidth-10}]}
                activeOpacity={0.95}>
                <View style={styles.labelContainer}>
                  <View>
                    <View>
                      <Text style={styles.mainText}>
                        Childs Food Consumption
                      </Text>
                    </View>
                    <Text style={styles.labelText}>Breakfast</Text>

                    <RadioButton.Group
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingEnd: 55}}>
                          <RadioButton value="1" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Home made
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="0" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Street
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>

                    <Text style={styles.labelText}>Lunch</Text>
                    <RadioButton.Group
                      onValueChange={newValue => setLunchValue(newValue)}
                      value={valuelunch}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingEnd: 55}}>
                          <RadioButton value="1" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Home made
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="0" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Street
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                    <Text style={styles.labelText}>Dinner</Text>
                    <RadioButton.Group
                      onValueChange={newValue => setDinnerValue(newValue)}
                      value={valuedinner}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingEnd: 55}}>
                          <RadioButton value="1" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Home made
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="0" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Street
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>
                </View>

                {ch1==true?
                <View
                  style={{
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                 >
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Saved
                  </Text>
                </View>
                :
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    food_consumption()
                    // valuebreak,
                    // valuelunch,
                    // valuedinner,
                  }>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
                
                          }
                
              </View>
              <View
                style={[styles.cardcontainer, {width: windowWidth-10}]}
                activeOpacity={0.95}>
                <View style={styles.labelContainer}>
                  <View>
                    <View>
                      <Text style={styles.mainText}>
                        Childs Food Consumption
                      </Text>
                      <Text style={{color:'gray',marginTop:-10}}>
                        D  : Daily{'\n'}
                        W : Weekly{'\n'}
                        O  : Occationally{'\n'}
                      </Text>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>BREAD</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setBreadValue(newValue)}
                          value={valueBread}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                        {/* <RadioForm
                          radio_props={radio_props}
                          initial={0}
                          onPress={newValue => setBreadValue(newValue)}
                        /> */}
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>KOTTU</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setKottuValue(newValue)}
                          value={valueKottu}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>EGG ROTI</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => seteggValue(newValue)}
                          value={valueEgg}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>PARATA</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setParataValue(newValue)}
                          value={valueParata}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>FLAVOURED RICE</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setFlavoredValue(newValue)}
                          value={valueFlavord}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>
                          INSTANT OR NORMAL NOODLES
                        </Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setInstantValue(newValue)}
                          value={valueInstant}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>BURGERS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setBurgerValue(newValue)}
                          value={valueBurger}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>PITZAS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setPitzaValue(newValue)}
                          value={valuePitza}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>FRENCH FRIES</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setFrenchValue(newValue)}
                          value={valueFrench}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>HEAT & EAT ITEMS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setheatValue(newValue)}
                          value={valueHeat}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>PASTAS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setPastaValue(newValue)}
                          value={valuePast}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>CRACKERS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setCrackerValue(newValue)}
                          value={valueCracker}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>COLAS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setColasValue(newValue)}
                          value={valueColas}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>CHOCOLATES</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setchocoValue(newValue)}
                          value={valueChoco}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>SWEET DRINKS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setSweetValue(newValue)}
                          value={valueSweet}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>ICE CREAMS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setIceCreamValue(newValue)}
                          value={valueIceCream}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>TEA / COFFIE</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setTeaValue(newValue)}
                          value={valueTea}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>
                  </View>
                </View>
                {ch2==true?
                <View
                  style={{
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Saved
                  </Text>
                </View>
                :
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => wheat_rice_flour()}>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
                }
                
              </View>

              <View
                style={[styles.cardcontainer, {width: windowWidth-10}]}
                activeOpacity={0.95}>
                <View style={styles.labelContainer}>
                  <View>
                    <View>
                      <Text style={styles.mainText}>
                        Childs Food Consumption
                      </Text>
                      <Text style={{color:'gray',marginTop:-10}}>
                        D  : Daily{'\n'}
                        W : Weekly{'\n'}
                        O  : Occationally{'\n'}
                      </Text>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>BUNS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setBunsValue(newValue)}
                          value={valueBuns}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>PASTRIES</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setPastryValue(newValue)}
                          value={valuePastry}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>BUSICUITS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setBusictValue(newValue)}
                          value={valuBusict}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>COOCKIES</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setCookiesValue(newValue)}
                          value={valueCookies}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>DOUGHNUTS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setDonutsValue(newValue)}
                          value={valueDonuts}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>CAKES AND CUPCAKES</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setCakeValue(newValue)}
                          value={valueCake}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>SOYA</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setSoyaValue(newValue)}
                          value={valueSoya}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>GENERAL POTATOS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setPotatoValue(newValue)}
                          value={valuePotato}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>SAUSAGES</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setSossageValue(newValue)}
                          value={valueSossage}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>MEATBALLS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setMeatboalValue(newValue)}
                          value={valueMeatboal}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>
                          FRIED CHICKEN ITEMS
                        </Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue =>
                            setFridChicknValue(newValue)
                          }
                          value={valueFridChickn}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>ALL CANNED FOOD</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setCannedValue(newValue)}
                          value={valueCanned}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>VEGETABLE OIL</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setVegiValue(newValue)}
                          value={valueVegi}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>MARGARINE</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setMagarinValue(newValue)}
                          value={valueMagarin}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>CEREALS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setCerialValue(newValue)}
                          value={valueCerial}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>YOGURT</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setYourgatValue(newValue)}
                          value={valueYourgat}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>NUTRITION BARS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setNutrionValue(newValue)}
                          value={valueNutrion}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={{width: windowWidth / 2 - 10}}>
                        <Text style={styles.labelText}>SUPPLEMENTS</Text>
                      </View>
                      <View>
                        <RadioButton.Group
                          onValueChange={newValue => setSuppValue(newValue)}
                          value={valueSupp}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="daily" />
                              <Text style={styles.radioButtonText}>D</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingEnd: 8}}>
                              <RadioButton value="Weekly" />
                              <Text style={styles.radioButtonText}>W</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <RadioButton value="Occationaly" />
                              <Text style={styles.radioButtonText}>O</Text>
                            </View>
                          </View>
                        </RadioButton.Group>
                      </View>
                    </View>
                  </View>

                  <View>
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
                  </View>
                </View>
                {
                  ch3==true?
                <View
                  style={{
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Saved
                  </Text>
                </View>
                :
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => fodConsumption(valueBread)}>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
                }
                
              </View>
              {ch1==null || ch2==null ?
            <View style={{alignSelf:'flex-end',margin:10,padding:7,paddingHorizontal:15,backgroundColor:'rgba(107,179,51,0.1)',borderRadius:20}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'white'}}>Next</Text>
              <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="white"
                  style={{paddingLeft:5}}
              />
            </View>
          </View>
        :
        <TouchableOpacity onPress={()=>position()} style={{alignSelf:'flex-end',margin:10,padding:7,paddingHorizontal:15,backgroundColor:'#6bb333',borderRadius:20}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'white'}}>Next</Text>
                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="white"
                    style={{paddingLeft:5}}
                 />
            </View>
        </TouchableOpacity>
            }
            </Animatable.View>
          :
          <Animatable.View animation={'fadeIn'} style={{backgroundColor:'#e5e5e5'}}>
              <View
                style={[styles.cardcontainer, {width: windowWidth-10}]}
                activeOpacity={0.95}>
                <View style={styles.labelContainer}>
                  <View>
                    <View>
                      <Text style={styles.mainText}>Basic Information</Text>
                    </View>
                    <Text style={[styles.labelText, {marginBottom: 10}]}>
                      PLAYING WITH FRIENDS
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setPlayFValue(newValue)}
                      value={valueplayF}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Daily
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="Weekly" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Weekly
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="Occationally" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Occationally
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>

                    <Text style={[styles.labelText, {marginBottom: 10}]}>
                      GYM,WALK, JOG,YOGA, AEROBICS, DANCING MORE THAN 15 MINUTES
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setGymValue(newValue)}
                      value={valueGym}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Daily
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="Weekly" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Weekly
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="Occationally" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Occationally
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                    <Text style={styles.labelText}>SWIMMINGS</Text>

                    <RadioButton.Group
                      onValueChange={newValue => setSwimValue(newValue)}
                      value={valuSwim}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Daily
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="Weekly" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Weekly
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="Occationally" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Occationally
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>

                    <Text style={styles.labelText}>CYCLING</Text>

                    <RadioButton.Group
                      onValueChange={newValue => setCycleValue(newValue)}
                      value={valueCycle}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Daily
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="Weekly" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Weekly
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="Occationally" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Occationally
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>

                  <View>
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
                  </View>
                </View>
                {ph1==true?
                <View
                  style={{
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    physical_activities()
                  }>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </View>
                :
                  <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    physical_activities()
                  }>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              }
                
              </View>

              <View
                style={[styles.cardcontainer, {width: windowWidth-10}]}
                activeOpacity={0.95}>
                <View style={styles.labelContainer}>
                  <View>
                    <View>
                      <Text style={styles.mainText}>Stress</Text>
                    </View>
                    <Text style={[styles.labelText, {marginBottom: 10}]}>
                      HAVE FRIENDS AT HOME
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setHaveFriendValue(newValue)}
                      value={valueHaveFriends}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="yes" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Yes
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="no" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            No
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>

                    <Text style={[styles.labelText, {marginBottom: 10}]}>
                      PLAYING WITH FRIENDS AT HOME
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setPlayFriendsValue(newValue)}
                      value={valuePlayFriends}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="yes" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Yes
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="no" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            No
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                    <Text style={[styles.labelText, {marginBottom: 10}]}>
                      MOSTLY INDOOR GAMES ( COMPUTER / PHONE)
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setIndoorValue(newValue)}
                      value={valueIndoor}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="yes" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Yes
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="no" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            No
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>

                    <Text style={[styles.labelText, {marginBottom: 10}]}>
                      NOT ACCEPTED AMOUNG FRIENDS
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setAcceptValue(newValue)}
                      value={valueaccept}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="yes" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Yes
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="no" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            No
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                    <Text style={[styles.labelText, {marginBottom: 10}]}>
                      TUTION CLASSES MORE THAN 3 DAYS
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setTutionValue(newValue)}
                      value={valuTution}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="yes" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Yes
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="no" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            No
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>

                    <Text style={styles.labelText}>
                      BOTH PARENTS ARE WORKING
                    </Text>

                    <RadioButton.Group
                      onValueChange={newValue => setParentWorkValue(newValue)}
                      value={valueParentWork}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="yes" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            Yes
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingRight: 25}}>
                          <RadioButton value="no" />
                          <Text
                            style={{
                              paddingVertical: 8,
                              fontSize: 12,
                              color: 'gray',
                            }}>
                            No
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>

                  <View>
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
                  </View>
                </View>
                      {
                        ph2==true?
                  <View
                  style={{
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  
                  >
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Saved
                  </Text>
                </View>
                :
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 100,
                    padding: 7,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    stress()
                  }
                  >
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
                      }
                
              </View>

              {ph1==null || ph2==null?
               <View style={{alignSelf:'flex-end',margin:10,padding:7,paddingHorizontal:15,backgroundColor:'rgba(107,179,51,0.1)',borderRadius:20}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white'}}>Next</Text>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="white"
                        style={{paddingLeft:5}}
                        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                </View>
            </View> 
            :
            <TouchableOpacity onPress={()=>{position();navigation.navigate('profile')}} style={{alignSelf:'flex-end',margin:10,padding:7,paddingHorizontal:15,backgroundColor:'#6bb333',borderRadius:20}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white'}}>Next</Text>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="white"
                        style={{paddingLeft:5}}
                        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                </View>
            </TouchableOpacity>
              }
              
            </Animatable.View>
        );
      };


      
    const navigation = useNavigation();

    const scrollViewRef = useRef();
    const [currentPosition, setCurrentPosition] = useState(0);
    return (
        <View style={styles.container}>
            <Ionicons
              name="ios-person-outline"
              size={20}
              color="white"
              style={{position:'absolute',top:5,left:10,zIndex:2}}
            //   onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <ReactNativeParallaxHeader
                headerMinHeight={HEADER_HEIGHT}
                headerMaxHeight={180}
                extraScrollHeight={20}
                navbarColor="#6bb333"
                titleStyle={styles.titleStyle}
                title={title()}
                backgroundColor={'#6bb333'}
                statusBarColor={'#6bb333'}
                alwaysShowTitle={false}
                alwaysShowNavBar={false}
                // backgroundImage={require('./bg.png')}
                backgroundImageScale={1.2}
                renderNavBar={renderNavBar}
                renderContent={renderContent}
                containerStyle={styles.container}
                contentContainerStyle={styles.contentContainer}
                innerContainerStyle={styles.container}
                scrollViewProps={{
                    ref:scrollViewRef,
                    onContentSizeChange:() => scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true }),
                    onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                    onScrollEndDrag: () => console.log('onScrollEndDrag'),
                }}
            />
        
      </View>
    );
  }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     contentContainer: {
//       flexGrow: 1,
//     },
//     navContainer: {
//       height: HEADER_HEIGHT,
//       marginHorizontal: 10,
//     },
//     statusBar: {
//       height: STATUS_BAR_HEIGHT,
//       backgroundColor: 'transparent',
//     },
//     navBar: {
//       height: NAV_BAR_HEIGHT,
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       flexDirection: 'row',
//       backgroundColor: 'transparent',
//     },
//     titleStyle: {
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: 18,
//     },
//   });  