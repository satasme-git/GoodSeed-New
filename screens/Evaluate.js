import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState, useEffect ,useContext, useRef} from 'react' 
import { styles,  buttons} from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import { foodConsumption } from '../styles/foodConsumption';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Days } from '../styles/Days';
import { EveluationType } from '../styles/EveluationType'

import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { StressP } from '../styles/StressP';
import { StressC } from '../styles/StressC';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { HealthContext } from '../context/Context';

import { useNavigation , DrawerActions } from '@react-navigation/native';

import {Picker} from '@react-native-picker/picker';

import { Activities } from '../styles/Activities';

export default function Evaluvate() {

    const health = useContext(HealthContext);
  
    const navigation = useNavigation();
  
    const BaseUrl = require('../styles/BaseUrl');

    const [ current, setCurrent ] = useState(1);
    const [ current2, setCurrent2 ] = useState(1);
    const [ current3, setCurrent3 ] = useState(1);
    const [ tab, setTab ] = useState(1);

    const [ field, setField ] = useState(1);

    const [ meal1, setMeal1 ] = useState(0);
    const [ meal2, setMeal2 ] = useState(0);
    const [ meal3, setMeal3 ] = useState(0);
    const [ meal4, setMeal4 ] = useState(0);
    const [ meal5, setMeal5 ] = useState(0);
    const [ meal6, setMeal6 ] = useState(0);
    const [ meal7, setMeal7 ] = useState(0);
    const [ meal8, setMeal8 ] = useState(0);
    const [ meal9, setMeal9 ] = useState(0);
    const [ meal10, setMeal10 ] = useState(0);
    const [ meal11, setMeal11 ] = useState(0);
    const [ meal12, setMeal12 ] = useState(0);
    const [ meal13, setMeal13 ] = useState(0);
    const [ meal14, setMeal14 ] = useState(0);
    const [ meal15, setMeal15 ] = useState(0);
    const [ meal16, setMeal16 ] = useState(0);
    const [ meal17, setMeal17 ] = useState(0);
    const [ meal18, setMeal18 ] = useState(0);
    const [ meal19, setMeal19 ] = useState(0);
    const [ meal20, setMeal20 ] = useState(0);
    const [ meal21, setMeal21 ] = useState(0);

    
    const [ food, setFood ] = useState(false);
    const [ activity, setActivity ] = useState(false);

    // const route = useRoute();
    const radio_props = [
      {label: 'D', value: 'daily' },
      {label: 'W', value: 'weekly' },
      {label: 'O', value: 'occationally' }
    ];

    const [isLoading, setLoading] = useState(true);
    const [datas, setData] = useState([]);
  
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [grade, setGrade] = useState('');
    const [className, setClassName] = useState('');
    const [dep, setDep] = useState('');
    const [emp, setEmp] = useState('');
    const [campus, setCampus] = useState('');
    const [classNumber, setClassNumber] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [parent, setParent] = useState('');
    const [waist, setWaist] = useState('');
    const [age, setAge] = useState('');
  
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
  
    const [mon, setMon] = useState(0);
    const [tue, setTue] = useState(0);
    const [wed, setWed] = useState(0);
    const [thu, setThu] = useState(0);
    const [fri, setFri] = useState(0);
    const [sat, setSat] = useState(0);
    const [sun, setSun] = useState(0);

    const [yes1, setYes1] = useState(true);
    const [yes2, setYes2] = useState(true);
    const [yes3, setYes3] = useState(true);
    const [yes4, setYes4] = useState(true);
    const [yes5, setYes5] = useState(true);
    const [yes6, setYes6] = useState(true);
    
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
    const [stressQ, setStressQ] = useState(null);

    
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
    var age = new Date().getFullYear() - currentDate.getFullYear();
    setAge(age.toString()+" Years")
    console.log('>>>>>>>>>>>>>>>>>>>> : ' + age);
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
    age,
    field,
    grade,
    classNumber,
    department,
    emp_number,
    university,
    height,
    weight,
    waist,
    parent,
  ) => {
 
    const formData = new FormData()

    formData.append('name', name);
    formData.append('email', health.user.email);
    formData.append('dob', dob);
    formData.append('age', age);
    formData.append('field', field);
    formData.append('grade', grade);
    formData.append('class_number', classNumber);
    formData.append('department', department);
    formData.append('emp_no', emp_number);
    formData.append('university', university);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('parent_name', parent);
    formData.append('waist_size', waist);


    fetch(BaseUrl.BASE_URL+'/api/basicDetails/', {
      method: 'POST', 
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        health.setUser(data);
        setBasic(true)
        // storeUserData(data)
      })
      .catch(error => {
        console.log('Error:', error);
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
        // storeUserData(data)
        health.setUser(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const savefoodCunsumptions = () => {

    const formData = new FormData()

    const count = meal1+meal2+meal3+meal4+meal5+meal6+meal7+meal8+meal9+meal10+meal11+meal12+meal13+meal14+meal15+meal16+meal17+meal18+meal19+meal20+meal21
    formData.append('member_id', health.user.member_id);
    formData.append('risk', count);


    console.log(count)

    fetch(BaseUrl.BASE_URL+'/api/food/'+current, {
      method: 'POST', // or 'PUT'
      
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // setContact(true)
        // storeUserData(data)
        health.setUser(data);
        current==35?
        setFood(true)
        :setCurrent(current+1)

        reset()
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  
  const physical_activities = () => {
   console.log('clicked')

    const formData = new FormData()
    const count= mon+tue+wed+thu+fri+sat+sun
    formData.append('member_id', health.user.member_id);
    formData.append('days', count);

    fetch(BaseUrl.BASE_URL+'/api/physicalActivities/'+current2, {
      method: 'POST', // or 'PUT'
    
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Alert.alert('Insert success');
        console.log('Success:', data);

        if(current2==2){
          setActivity(true)
        }
        else{
          setCurrent2(current2+1)
        }
        // setPh1(true)
        // storeUserData(data)
        health.setUser(data);
        
      })
      .catch(error => {
        // Alert.alert('Insert success');
        console.log('Error:', formData);
      });
  };
  
  const stressParent = () => {
 
     const formData = new FormData()
 
     formData.append('home_have_friends', yes1);
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
   const stress = () => {
 
     const formData = new FormData()
 
     formData.append('1', yes1==true?'yes':'no');
     formData.append('2', yes2==true?'yes':'no');
     formData.append('3', yes3==true?'yes':'no');
     formData.append('4', yes4==true?'yes':'no');
     formData.append('5', yes5==true?'yes':'no');
     formData.append('6', yes6==true?'yes':'no');
     formData.append('type', health.userType);
 
     fetch(BaseUrl.BASE_URL+'/api/stress/'+health.user.member_id, {
       method: 'POST', // or 'PUT'
     
       body: formData,
     })
       .then(response => response.json())
       .then(data => {
         // Alert.alert('Insert success');
         console.log('Success:', data);
         setStressQ(true)
        //  setPh2(true)
        //  storeUserData(data)

         health.setUser(data);
       })
       .catch(error => {
         // Alert.alert('Insert success');
         console.log('Error:', formData);
       });
   };

   const position = () => {
  

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


    useEffect(() => {
        console.log(health.userType)
    }, [])

    const reset =()=>{
        setMeal1(false)
        setMeal2(false)
        setMeal3(false)
        setMeal4(false)
        setMeal5(false)
        setMeal6(false)
        setMeal7(false)
        setMeal8(false)
        setMeal9(false)
        setMeal10(false)
        setMeal11(false)
        setMeal12(false)
        setMeal13(false)
        setMeal14(false)
        setMeal15(false)
        setMeal16(false)
        setMeal17(false)
        setMeal18(false)
        setMeal19(false)
        setMeal20(false)
        setMeal21(false)
    }

    // const savefoodCunsumptions = ()=>{


    //     setCurrent(current+1)
    //     reset()
    // }
    const savefoodCunsumptionsBack = ()=>{
        setCurrent(current-1)
        reset()
    }
    const nextTab = ()=>{
        setTab(tab+1)
        setBasic(true)
        setContact(true)
    }

    // function calculateAge (birthDate) {
    //     birthDate = new Date(birthDate);
    //     otherDate = new Date();
    
    //     var years = (otherDate.getFullYear() - birthDate.getFullYear());
    
    //     if (otherDate.getMonth() < birthDate.getMonth() || 
    //         otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
    //         years--;
    //     }
    
    //     return years;
    // }

  return (
    <View style={styles.container}>

    <View style={{position:'absolute',zIndex:999,top:0,width:'100%',elevation:3,backgroundColor:'#fff'}}>   
            {
                EveluationType.map((item)=>
                tab==item.id?
                <View style={{alignItems:'center',justifyContent:'center',padding:15,paddingBottom:0}}>
                    <Animatable.Text animation={'fadeInLeft'} style={{fontSize:30,fontWeight:'700'}}>{item.title}</Animatable.Text>
                    <Animatable.Text delay={900} animation={'fadeIn'} style={{fontSize:14,textAlign:'center',color:'gray'}}>{item.subtitle}</Animatable.Text> 
                </View> 
                :
                null 
                )
            }

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:windowWidth,padding:10,backgroundColor:'#fff'}}>
               {
                EveluationType.map((item)=>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{backgroundColor:'#6bb333',padding:4,borderRadius:30}}>
                        {
                            item.id==tab?
                             <Animatable.View animation={'zoomIn'} key={tab}>
                                 <View style={{backgroundColor:'#fff',borderRadius:20,width:7,height:7,margin:2}} />
                             </Animatable.View>
                            
                            :
                            item.id<tab?
                            <Animatable.View animation={'bounceIn'}>
                             <Ionicons 
                                name="checkmark-sharp" 
                                size={17} 
                                color="white" 
                                style={{zIndex:2,paddingHorizontal:1,margin:-3}}
                            />   
                            </Animatable.View>
                            
                            
                            : null
                        }
                    </View>
                    {
                        item.id>3?
                        null
                        :
                        item.id<tab?
                        <View style={{height:2,width:70,backgroundColor:'#6bb333'}} />
                        :
                        <View style={{height:2,width:70,backgroundColor:'#6bb333'}} />
                    }
                    
                </View>
                )
                } 
            </View>

        </View> 


        <View style={[styles.viewContainer,{marginTop:115,padding:0,alignItems:'center',justifyContent:'flex-start'}]}>
            


            

        {/* <TouchableHighlight onPress={()=>setTab(tab-1)}>
            <Text>back</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>setTab(tab+1)}>
            <Text>next</Text>
        </TouchableHighlight> */}

        <ScrollView>
        {
            tab==1?
            <Animatable.View animation={'fadeIn'} style={{backgroundColor:'#fff',margin:0,marginBottom:55}}>
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

            <Text style={styles.labelText}>Age</Text>

            <TextInput
              style={[
                styles.labelTextContainer,
                {padding: 10, width: windowWidth - 43, marginBottom: 5},
              ]}
              onChangeText={text => setAge(text)}
              value={age}
              placeholder="Age"
            />

            <Text style={styles.labelText}>Field</Text>
              <View style={[
                styles.labelTextContainer,
                { width: windowWidth - 43, marginBottom: 5},
              ]}>
                <Picker
                selectedValue={field}
                onValueChange={(itemValue, itemIndex) =>
                    setField(itemValue)
                }
                mode='dropdown'
                style={{width:'100%'}}
                dropdownIconColor={'#000'}
                >
                <Picker.Item label="Student" value="1" />
                <Picker.Item label="Office" value="2" />
                <Picker.Item label="Other" value="3" />
                </Picker>                  
              </View>

            {
              field==1?
              <View>
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
              {/* <Text style={styles.labelText}>Class</Text>
            <TextInput
              style={[
                styles.labelTextContainer,
                {padding: 10, width: windowWidth - 43, marginBottom: 5},
              ]}
              onChangeText={text => setClassName(text)}
              value={className}
              placeholder="Enter class here"
            /> */}
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
            </View>
              :
              field==2?
              <View>
              <Text style={styles.labelText}>Department</Text>
            <TextInput
              style={[
                styles.labelTextContainer,
                {padding: 10, width: windowWidth - 43, marginBottom: 5},
              ]}
              onChangeText={text => setDep(text)}
              value={dep}
              placeholder="Enter Department here"
            />
              <Text style={styles.labelText}>EMP Number</Text>
            <TextInput
              style={[
                styles.labelTextContainer,
                {padding: 10, width: windowWidth - 43, marginBottom: 5},
              ]}
              onChangeText={text => setEmp(text)}
              value={emp}
              placeholder="Enter EMP Number here"
            />
            </View>
              :
        <View>
              <Text style={styles.labelText}>University</Text>
            <TextInput
              style={[
                styles.labelTextContainer,
                {padding: 10, width: windowWidth - 43, marginBottom: 5},
              ]}
              onChangeText={text => setCampus(text)}
              value={campus}
              placeholder="Enter University here"
            />
            </View>
              
              }            
            
            <Text style={styles.labelText}>Height (cm)</Text>
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
            <Text style={styles.labelText}>Weight (kg)</Text>
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
            <Text style={styles.labelText}>Waist size (cm)</Text>
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
              age,
              field,
              grade,
              classNumber,
              dep,
              emp,
              campus,
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

          {/* {basic==null || contact==null?
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
          } */}
          
        </Animatable.View>
        :
            tab==2?
            <View style={{alignItems:'center',marginTop:10}}>
            <Text style={{marginBottom:2,fontSize:12}}>{current} / {foodConsumption.length}</Text>

            {
                foodConsumption.map((item)=>
                    <View>
                        {
                            item.id==current?
                            <Animatable.View key={current} animation={'slideInRight'}>
                                <View style={{flexDirection:'row',width:windowWidth-35}}>
                                    <Text style={{fontSize:16}}>{item.id<10?'0':''}{item.id}. </Text>
                                    <Text style={{fontSize:16}}>{item.title}</Text>                                
                                </View>
                                {/* <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:0}}> */}
                                    {/* {
                                        Days.map((day)=>
                                            <View style={{width:windowWidth/5,margin:10,alignItems:'center'}}>
                                                <Text style={{textAlign:'center'}}>{day.title}</Text>

                                                <TouchableHighlight style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2}}>
                                                    <Text>{day.meal1}</Text>
                                                </TouchableHighlight>

                                                <TouchableHighlight style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2}}>
                                                    <Text>{day.meal2}</Text>                                                    
                                                </TouchableHighlight>

                                                <TouchableHighlight style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2}}>
                                                    <Text>{day.meal3}</Text>                                                    
                                                </TouchableHighlight>

                                            </View>
                                        )
                                    } */}
                                {/* </View> */}
                            </Animatable.View>
                            :
                            null
                        }
                    </View>
                )
            }
            <Animatable.View key={current} animation={'slideInRight'} style={{alignItems:'center'}}>

            <View style={{flexDirection:'row',flexWrap:'wrap',margin:0,marginHorizontal:10}}>

            <View style={{width:windowWidth/5,margin:7,alignItems:'center'}}>
                <Text>MON</Text>
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal1(meal1==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal1==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal1==1?'#fff':'#000'}}>Breakfast</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal2(meal2==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal2==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal2==1?'#fff':'#000'}}>Lunch</Text>                                                    
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal3(meal3==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal3==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal3==1?'#fff':'#000'}}>Dinner</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/5,margin:7,alignItems:'center'}}>    
                <Text>TUE</Text>
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal4(meal4==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal4==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal4==1?'#fff':'#000'}}>Breakfast</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal5(meal5==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal5==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal5==1?'#fff':'#000'}}>Lunch</Text>                                                    
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal6(meal6==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal6==1?'#6bb333':'#fff',}}>
                    <Text  style={{color:meal6==1?'#fff':'#000'}}>Dinner</Text>                                                    
                </TouchableHighlight>
            </View>
                
            <View style={{width:windowWidth/5,margin:7,alignItems:'center'}}>    
                <Text>WED</Text>
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal7(meal7==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal7==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal7==1?'#fff':'#000'}}>Breakfast</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal8(meal8==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal8==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal8==1?'#fff':'#000'}}>Lunch</Text>                                                    
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal9(meal9==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal9==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal9==1?'#fff':'#000'}}>Dinner</Text>                                                    
                </TouchableHighlight>
            </View>
                
            <View style={{width:windowWidth/5,margin:7,alignItems:'center'}}>
                <Text>THU</Text>
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal10(meal10==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal10==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal10==1?'#fff':'#000'}}>Breakfast</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal11(meal11==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal11==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal11==1?'#fff':'#000'}}>Lunch</Text>                                                    
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal12(meal12==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal12==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal12==1?'#fff':'#000'}}>Dinner</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/5,margin:7,alignItems:'center'}}>    
                <Text>FRI</Text>
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal13(meal13==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal13==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal13==1?'#fff':'#000'}}>Breakfast</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal14(meal14==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal14==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal14==1?'#fff':'#000'}}>Lunch</Text>                                                    
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal15(meal15==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal15==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal15==1?'#fff':'#000'}}>Dinner</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/5,margin:7,alignItems:'center'}}>    
                <Text>SAT</Text>
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal16(meal16==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal16==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal16==1?'#fff':'#000'}}>Breakfast</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal17(meal17==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal17==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal17==1?'#fff':'#000'}}>Lunch</Text>                                                    
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal18(meal18==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal18==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal18==1?'#fff':'#000'}}>Dinner</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/5,margin:10,alignItems:'center'}}>    
                <Text>SUN</Text>
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal19(meal19==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal19==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal19==1?'#fff':'#000'}}>Breakfast</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal20(meal20==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal20==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal20==1?'#fff':'#000'}}>Lunch</Text>                                                    
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMeal21(meal21==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:meal21==1?'#6bb333':'#fff',}}>
                    <Text style={{color:meal21==1?'#fff':'#000'}}>Dinner</Text>                                                    
                </TouchableHighlight>
            </View>
            
                </View>
            </Animatable.View>

              
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
                  savefoodCunsumptions()
                }>
                <Text style={{color: 'white', alignItems: 'center'}}>
                  Save
                </Text>
              </TouchableOpacity>
              
            </View>
            :
            tab==3?
            <View style={{alignItems:'center',marginTop:10}}>
            <Text style={{marginBottom:2,fontSize:12}}>{current2} / {Activities.length}</Text>

            {
                Activities.map((item)=>
                    <View>
                        {
                            item.id==current2?
                            <Animatable.View key={current2} animation={'slideInRight'}>
                                <View style={{flexDirection:'row',width:windowWidth-35}}>
                                    <Text style={{fontSize:16}}>{item.id<10?'0':''}{item.id}. </Text>
                                    <Text style={{fontSize:16}}>{item.title}</Text>                                
                                </View>
                            </Animatable.View>
                            :
                            null
                        }

                    </View>
                )
            }
            <Animatable.View key={current2} animation={'slideInRight'}>

            <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:20}}>
            <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setMon(mon==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:mon==1?'#6bb333':'#fff',}}>
                    <Text style={{color:mon==1?'#fff':'#000'}}>Monday</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setTue(tue==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:tue==1?'#6bb333':'#fff',}}>
                    <Text style={{color:tue==1?'#fff':'#000'}}>Tuesday</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setWed(wed==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:wed==1?'#6bb333':'#fff',}}>
                    <Text style={{color:wed==1?'#fff':'#000'}}>Wednesday</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setThu(thu==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:thu==1?'#6bb333':'#fff',}}>
                    <Text style={{color:thu==1?'#fff':'#000'}}>Thursday</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setFri(fri==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:fri==1?'#6bb333':'#fff',}}>
                    <Text style={{color:fri==1?'#fff':'#000'}}>Friday</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setSat(sat==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:sat==1?'#6bb333':'#fff',}}>
                    <Text style={{color:sat==1?'#fff':'#000'}}>Saturday</Text>                                                    
                </TouchableHighlight>
            </View>

            <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setSun(sun==1?0:1)} style={{padding:2,paddingHorizontal:5,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:sun==1?'#6bb333':'#fff',}}>
                    <Text style={{color:sun==1?'#fff':'#000'}}>Sunday</Text>                                                    
                </TouchableHighlight>
            </View>

            </View>

            </Animatable.View>
            

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
                  physical_activities()
                }>
                <Text style={{color: 'white', alignItems: 'center'}}>
                  Save
                </Text>
              </TouchableOpacity>


            </View>
            :
            health.userType=='Parent'?
            <View style={{alignItems:'center',marginTop:10}}>
            {/* <Text style={{marginBottom:2,fontSize:12}}>{current3} / {StressC.length}</Text> */}
            {StressC.map((item)=>
            <Animatable.View key={current} animation={'slideInRight'}>
            <View style={{flexDirection:'row',width:windowWidth-35}}>
                <Text style={{fontSize:16}}>{item.id<10?'0':''}{item.id}. </Text>
                <Text style={{fontSize:16}}>{item.title}</Text>                                
            </View>
        {
          item.id==1?
          <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
              <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                  <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes1(!yes1)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes1?'#6bb333':'#fff',}}>
                      <Text style={{color:yes1?'#fff':'#000'}}>Yes</Text>                                                    
                  </TouchableHighlight>
              </View>

              <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                  <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes1(!yes1)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes1?'#6bb333':'#fff',}}>
                      <Text style={{color:!yes1?'#fff':'#000'}}>No</Text>                                                    
                  </TouchableHighlight>
              </View>

            </View>
            :
            item.id==2?
            <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes2(!yes2)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes2?'#6bb333':'#fff',}}>
                        <Text style={{color:yes2?'#fff':'#000'}}>Yes</Text>                                                    
                    </TouchableHighlight>
                </View>

                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes2(!yes2)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes2?'#6bb333':'#fff',}}>
                        <Text style={{color:!yes2?'#fff':'#000'}}>No</Text>                                                    
                    </TouchableHighlight>
                </View>

              </View>

            :
            item.id==3?
            <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes3(!yes3)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes3?'#6bb333':'#fff',}}>
                        <Text style={{color:yes3?'#fff':'#000'}}>Yes</Text>                                                    
                    </TouchableHighlight>
                </View>

                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes3(!yes3)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes3?'#6bb333':'#fff',}}>
                        <Text style={{color:!yes3?'#fff':'#000'}}>No</Text>                                                    
                    </TouchableHighlight>
                </View>

              </View>:
            item.id==4?
            <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes4(!yes4)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes4?'#6bb333':'#fff',}}>
                        <Text style={{color:yes4?'#fff':'#000'}}>Yes</Text>                                                    
                    </TouchableHighlight>
                </View>

                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes4(!yes4)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes4?'#6bb333':'#fff',}}>
                        <Text style={{color:!yes4?'#fff':'#000'}}>No</Text>                                                    
                    </TouchableHighlight>
                </View>

              </View>:
            item.id==5?
            <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes5(!yes5)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes5?'#6bb333':'#fff',}}>
                        <Text style={{color:yes5?'#fff':'#000'}}>Yes</Text>                                                    
                    </TouchableHighlight>
                </View>

                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes5(!yes5)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes5?'#6bb333':'#fff',}}>
                        <Text style={{color:!yes5?'#fff':'#000'}}>No</Text>                                                    
                    </TouchableHighlight>
                </View>

              </View>:
            item.id==6?
            <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes6(!yes6)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes6?'#6bb333':'#fff',}}>
                        <Text style={{color:yes6?'#fff':'#000'}}>Yes</Text>                                                    
                    </TouchableHighlight>
                </View>

                <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                    <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes6(!yes6)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes6?'#6bb333':'#fff',}}>
                        <Text style={{color:!yes6?'#fff':'#000'}}>No</Text>                                                    
                    </TouchableHighlight>
                </View>

              </View>
            :
            null
        }
            

        </Animatable.View>
            )}
            <Animatable.View key={current2} animation={'slideInRight'} style={{marginBottom:10}}>

            {stressQ==true?
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
                  stress()
                }>
                <Text style={{color: 'white', alignItems: 'center'}}>
                  Save
                </Text>
              </TouchableOpacity>
              }

            </Animatable.View>
            </View>
            :
            <View style={{alignItems:'center',marginTop:10,marginRight:10}}>
            {/* <Text style={{marginBottom:2,fontSize:12}}>{current3} / {StressP.length}</Text> */}
            {StressP.map((item)=>
            // item.id==current3?
            <Animatable.View key={current} animation={'slideInRight'}>
                <View style={{flexDirection:'row',width:windowWidth-35}}>
                    <Text style={{fontSize:16}}>{item.id<10?'0':''}{item.id}. </Text>
                    <Text style={{fontSize:16}}>{item.title}</Text>                                
                </View>
            {
              item.id==1?
              <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                  <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                      <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes1(!yes1)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes1?'#6bb333':'#fff',}}>
                          <Text style={{color:yes1?'#fff':'#000'}}>Yes</Text>                                                    
                      </TouchableHighlight>
                  </View>

                  <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                      <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes1(!yes1)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes1?'#6bb333':'#fff',}}>
                          <Text style={{color:!yes1?'#fff':'#000'}}>No</Text>                                                    
                      </TouchableHighlight>
                  </View>

                </View>
                :
                item.id==2?
                <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes2(!yes2)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes2?'#6bb333':'#fff',}}>
                            <Text style={{color:yes2?'#fff':'#000'}}>Yes</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes2(!yes2)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes2?'#6bb333':'#fff',}}>
                            <Text style={{color:!yes2?'#fff':'#000'}}>No</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                  </View>

                :
                item.id==3?
                <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes3(!yes3)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes3?'#6bb333':'#fff',}}>
                            <Text style={{color:yes3?'#fff':'#000'}}>Yes</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes3(!yes3)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes3?'#6bb333':'#fff',}}>
                            <Text style={{color:!yes3?'#fff':'#000'}}>No</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                  </View>:
                item.id==4?
                <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes4(!yes4)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes4?'#6bb333':'#fff',}}>
                            <Text style={{color:yes4?'#fff':'#000'}}>Yes</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes4(!yes4)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes4?'#6bb333':'#fff',}}>
                            <Text style={{color:!yes4?'#fff':'#000'}}>No</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                  </View>:
                item.id==5?
                <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes5(!yes5)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes5?'#6bb333':'#fff',}}>
                            <Text style={{color:yes5?'#fff':'#000'}}>Yes</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes5(!yes5)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes5?'#6bb333':'#fff',}}>
                            <Text style={{color:!yes5?'#fff':'#000'}}>No</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                  </View>:
                item.id==6?
                <View style={{flexDirection:'row',flexWrap:'wrap',margin:10,marginTop:10}}>
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes6(!yes6)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:yes6?'#6bb333':'#fff',}}>
                            <Text style={{color:yes6?'#fff':'#000'}}>Yes</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                    <View style={{width:windowWidth/4,margin:5,alignItems:'center'}}> 
                        <TouchableHighlight underlayColor={'rgba(107, 179, 51, 0.7)'} onPress={()=>setYes6(!yes6)} style={{padding:2,paddingHorizontal:10,borderColor:'#6bb333',borderWidth:2,borderRadius:20,margin:2,backgroundColor:!yes6?'#6bb333':'#fff',}}>
                            <Text style={{color:!yes6?'#fff':'#000'}}>No</Text>                                                    
                        </TouchableHighlight>
                    </View>
  
                  </View>
                :
                null
            }
                

            </Animatable.View>
            // :
            // null
            )}
            <Animatable.View key={current2} animation={'slideInRight'} style={{marginBottom:10}}>

            
            {stressQ==true?
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
            stress()
          }>
          <Text style={{color: 'white', alignItems: 'center'}}>
            Save
          </Text>
        </TouchableOpacity>
        }

            </Animatable.View>
              </View>
        }

</ScrollView>

{/* <Animatable.View key={tab} animation={'slideInUp'} style={{position:'absolute',bottom:0,flexDirection:'row',width:windowWidth,alignItems:'center',justifyContent:'space-evenly',backgroundColor:'#fff',padding:basic==null || contact==null?0:10,elevation:20}}>

 {
   tab==1?
          basic==null || contact==null?
          null
          :
          <View style={{alignItems:'center',justifyContent:'space-evenly',width:windowWidth,flexDirection:'row'}}>
            <TouchableHighlight style={[buttons.continuebtn,{marginTop:0,backgroundColor:'#fff'}]}>
          <View>
              <Text style={{color:'white',fontSize:16}}>Next</Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.continuebtn,{marginTop:0,backgroundColor:'#fff'}]}>
          <View>
              <Text style={{color:'white',fontSize:16}}>Next</Text>
          </View>
      </TouchableHighlight>
          <TouchableHighlight underlayColor={'#6bb333'} style={[buttons.continuebtn,{marginTop:0}]} onPress={()=>nextTab()}>
              <View>
                  <Text style={{color:'#000',fontSize:16}}>Next</Text>
              </View>
          </TouchableHighlight>
          </View>
   :
<View style={{flexDirection:'row',width:windowWidth,alignItems:'center',justifyContent:'space-evenly'}}>
{
        current>=2?
        <TouchableHighlight underlayColor={'#6bb333'} style={[buttons.continuebtn,{marginTop:0}]} onPress={()=>savefoodCunsumptionsBack()}>
            <View>
                <Text style={{color:'#000',fontSize:16}}>Back</Text>
            </View>
        </TouchableHighlight>
        :
        <TouchableHighlight style={[buttons.continuebtn,{marginTop:0,backgroundColor:'#fff'}]}>
            <View>
                <Text style={{color:'white',fontSize:16}}>Next</Text>
            </View>
        </TouchableHighlight>
    }
    
    <TouchableHighlight underlayColor={'#6bb333'} style={[buttons.continuebtn,{marginTop:0,color:'#000'}]} onPress={()=>savefoodCunsumptions()}>
        <View>
            <Text style={{fontSize:16,color:'#000'}}>Continue</Text>
        </View>
    </TouchableHighlight>
    
    {
        current>=35?
        <TouchableHighlight underlayColor={'#6bb333'} style={[buttons.continuebtn,{marginTop:0}]} onPress={()=>nextTab()}>
            <View>
                <Text style={{color:'#000',fontSize:16}}>Next</Text>
            </View>
        </TouchableHighlight>
        :
        <TouchableHighlight style={[buttons.continuebtn,{marginTop:0,backgroundColor:'#fff'}]}>
            <View>
                <Text style={{color:'white',fontSize:16}}>Next</Text>
            </View>
        </TouchableHighlight>
        
    }
    </View>
 }   

    

</Animatable.View> */}

        
        <Animatable.View style={buttons.float} animation={'zoomIn'}>
          {
          tab==1?
          basic==null || contact==null?
          null
          :
          <TouchableOpacity onPress={()=>{nextTab()}}>
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',padding:5,paddingHorizontal:10}}>
              <Text style={{fontSize:17}}>Next</Text>
              <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="black"
                    style={{paddingLeft:5,marginRight:-5}}
                />
            </View>
            
          </TouchableOpacity>
          :
          tab==2?
          food==false?
          null
          :
          <TouchableOpacity onPress={()=>{nextTab()}}>
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',padding:5,paddingHorizontal:10}}>
              <Text style={{fontSize:17}}>Next</Text>
              <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="black"
                    style={{paddingLeft:5,marginRight:-5}}
                />
            </View>
            
          </TouchableOpacity>
          :
          tab==3?
          activity ==false?
          null
          :
          <TouchableOpacity onPress={()=>{nextTab()}}>
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',padding:5,paddingHorizontal:10}}>
              <Text style={{fontSize:17}}>Next</Text>
              <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="black"
                    style={{paddingLeft:5,marginRight:-5}}
                />
            </View>
            
          </TouchableOpacity>
          :
          tab==4?
          stressQ == null?
          null
          :
          <TouchableOpacity onPress={()=>{navigation.navigate('Select')}}>
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',padding:5,paddingHorizontal:10}}>
              <Text style={{fontSize:17}}>Next</Text>
              <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="black"
                    style={{paddingLeft:5,marginRight:-5}}
                />
            </View>
            
          </TouchableOpacity>
          :
          null
        }
        </Animatable.View>




        </View>
      
    </View>
  );
}
