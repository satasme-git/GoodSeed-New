import React, {useRef, useState,} from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {buttons, styles} from '../styles/Styles';
import {FlatList} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Picker} from '@react-native-picker/picker';
import ModalDropdown from 'react-native-modal-dropdown';
import {RadioButton} from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import DropDownPicker from 'react-native-dropdown-picker';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width - 25;
const {event, ValueXY} = Animated;
const scrollY = new ValueXY();

export default function CutomHeaderScreen() {

  const labels = ["Cart","Delivery Address","Order Summary"];
    const customStyles = {
      stepIndicatorSize: 25,
      currentStepIndicatorSize:30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: '#fe7013',
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: '#fe7013',
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorFinishedColor: '#fe7013',
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorFinishedColor: '#fe7013',
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: '#fe7013',
      stepIndicatorLabelFinishedColor: '#ffffff',
      stepIndicatorLabelUnFinishedColor: '#aaaaaa',
      labelColor: '#999999',
      labelSize: 13,
      currentStepLabelColor: '#fe7013'
    }

    const [currentPosition, setCurrentPosition] = useState(0);

  const BaseUrl = require('../styles/BaseUrl');
  const route = useRoute();
  
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

  // const [valuebreak, setBreakValue] = React.useState('first');

  const [value5, setValue5] = useState(null);
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
    // email,
    dob,
    grade,
    classNumber,
    height,
    weight,
    parent,
  ) => {
    const data = {
      name: name,
      dob: dob,
      grade: grade,
      class_number: classNumber,
      height: height,
      weight: weight,
      parent_name: parent,
    };
    const formData = new FormData()

    formData.append('name', name);
    formData.append('dob', dob);
    formData.append('email', route.params.email);
    formData.append('grade', grade);
    formData.append('class_number', classNumber);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('parent_name', parent);


    fetch(BaseUrl.BASE_URL+'/api/basicDetails/', {
      method: 'POST', // or 'PUT'
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const food_consumption = () => {
    const data = {
      breackfast: valuebreak,
      lunch: valuelunch,
      dinner: valuedinner,
    };

    fetch('https://health.bestceylonhotels.com/api/food_consumption/1', {
      method: 'POST', // or 'PUT'
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Insert success');
        // console.log('Success:', response);
      })
      .catch(error => {
        Alert.alert('Insert success');
        // console.error('Error:', error);
      });
  };

  const wheat_rice_flour = () => {
    const data = {
      valueBread: valueBread,
      valueKottu: valueKottu,
      valueEgg: valueEgg,
      valueParata: valueParata,
      valueFlavord: valueFlavord,
      valueInstant: valueInstant,
      valueBurger: valueBurger,
      valueFrench: valueFrench,
      valueHeat: valueHeat,
      valuePast: valuePast,
      valueCracker: valueCracker,
      valueColas: valueColas,
      valueChoco: valueChoco,
      valueSweet: valueSweet,
      valueIceCream: valueIceCream,
      valueTea: valueTea,
      valuePitza: valuePitza,
    };

    fetch('https://health.bestceylonhotels.com/api/whet_rice_flour/1', {
      method: 'POST', // or 'PUT'
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // Alert.alert('Insert success');
        console.log('Success:', response);
      })
      .catch(error => {
        // Alert.alert('Insert success');
        console.error('Error:', error);
      });
  };

  const contactDetails = (fphone, mphone, guardphone, conperson, email) => {
    const data = {
      fphone: fphone,
      mphone: mphone,
      guardphone: guardphone,
      conperson: conperson,
      email: email,
    };

    fetch('https://health.bestceylonhotels.com/api/contact_details/1', {
      method: 'POST', // or 'PUT'
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fodConsumption = valueBread => {
    const data = {
      valueBread: valueBread,
    };

    console.log('>>>>>>>>>>>>>>>>>>>>> : ' + valueBread);
  };

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

  const navigation = useNavigation();
  const renderContent = x => (
    <View style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
    </View>
  );

  const logo = scrollY => {
    return (
      <View style={{margin: 20}}>
        {/* <Animated.View style={[styles.profilePic, {width: 100, height: 100}]}>
          <Image
            source={require('../assets/photosPortraitMe.png')}
            style={[
              styles.profilePic,
              {width: 80, height: 80, borderRadius: 25.5},
            ]}
          />
        </Animated.View> */}
        <Text style={{color: 'white', fontSize: 20, marginTop: -20,marginBottom:10}}>
          {route.params.email}
        </Text>
        <StepIndicator
                  customStyles={customStyles}
                  currentPosition={currentPosition}
                  labels={labels}
                  stepCount={3}
                  onPress={()=>setCurrentPosition(currentPosition+1)}
                  
            />
            {/* {
               currentPosition==0?
               <Text>1</Text>
               :
               currentPosition==1?
               <Text>2</Text>
               :
               <Text>3</Text>
            } */}
      </View>
    );
  };

  console.log(route.params)
  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 60, 90],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          <View>
            <Ionicons
              name="menu-outline"
              size={30}
              color="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          </View>
          <Animated.View style={{opacity}}>
            <Text style={styles.headerText}>{route.params.email}</Text>
          </Animated.View>

          
        </View>
        {/* </View> */}
      </View>
    );
  };
  
  const renderBody = () => {
    

    return (
      <View>
              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    basicDetails(
                      name,
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
              </View>

              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
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
              </View>
            </View>
    );
  };

  return (
    <StickyParallaxHeader
      // headerType="TabbedHeader"
      // foregroundImage={{
      //   uri: 'https://reactjs.org/logo-og.png',
      // }}

      // backgroundImage={{
      //       uri: 'https://wallsdesk.com/wp-content/uploads/2018/04/Palm-Desktop-Images.jpg',
      //     }}
      backgroundColor={'#6bb333'}
      foreground={logo(scrollY)}
      title={route.params.email}
      titleStyle={styles.titleStyle}
      // foregroundImage={{
      //   uri: 'https://reactjs.org/logo-og.png',
      // }}
      snapToEdge
      header={renderHeader()}
      parallaxHeight={120}
      headerHeight={40}
      headerSize={() => {}}
      onEndReached={() => {}}
      
      renderBody={renderBody()}

      tabs={[
        {
          title: 'Evaluation Form',
          content: renderContent(
            <View>
              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    basicDetails(
                      name,
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
              </View>

              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
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
              </View>
            </View>,
          ),
        },
        {
          title: 'General Food Consumption',
          content: renderContent(
            <View>
              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
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
              </View>
              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
                activeOpacity={0.95}>
                <View style={styles.labelContainer}>
                  <View>
                    <View>
                      <Text style={styles.mainText}>
                        Childs Food Consumption
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => wheat_rice_flour()}>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
                activeOpacity={0.95}>
                <View style={styles.labelContainer}>
                  <View>
                    <View>
                      <Text style={styles.mainText}>
                        Childs Food Consumption
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => fodConsumption(valueBread)}>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>,
          ),
        },
        {
          title: 'Physical activities & Stress',
          content: renderContent(
            <View>
              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
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

                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 120,
                    padding: 12,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    basicDetails(
                      name,
                      grade,
                      classNumber,
                      height,
                      weight,
                      parent,
                    )
                  }>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={[styles.cardcontainer, {width: windowWidth}]}
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
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
                          <RadioButton value="Weekly" />
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
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
                          <RadioButton value="Weekly" />
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
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
                          <RadioButton value="Weekly" />
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
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
                          <RadioButton value="Weekly" />
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
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
                          <RadioButton value="Weekly" />
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
                      onValueChange={newValue => setBreakValue(newValue)}
                      value={valuebreak}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', paddingRight: 35}}>
                          <RadioButton value="Daily" />
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
                          <RadioButton value="Weekly" />
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
                      grade,
                      classNumber,
                      height,
                      weight,
                      parent,
                    )
                  }>
                  <Text style={{color: 'white', alignItems: 'center'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>,
          ),
        },
      ]}
      contentContainerStyles={{backgroundColor: '#F2F2F2'}}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      tabsContainerBackgroundColor={'#6bb333'}
      scrollEvent={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
        useNativeDriver: false,
      })}></StickyParallaxHeader>
  );
}
