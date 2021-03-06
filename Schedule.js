import * as React from "react";
import { CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { useState } from "react";
import firebase from "./firebase";


const Drawer = createDrawerNavigator();
const Schedule = (props) => {
  const navigation = useNavigation();

  const [state,setState] = useState({
    Hospital: '',
    Doctor: '',
    Reason: '',
    Date: '',
    Time: ''
  });
//Altas
const citas = async() =>{
  if (state.Hospital ==='' || state.Doctor ==='' ||state.Reason ==='' ||state.Date ==='' ||state.Time ===''){
    alert('Please complete all fields')
  }else {
    console.log(state)
    firebase.db.collection('Schedule').add({
      Centro: state.Hospital,
      Fecha: state.Date,
      Hora: state.Time,
      Medico: state.Doctor,
      Motivo: state.Reason

    })
    alert('Appointment created')
   //No funciona xd
    //props.navigation.navigate('ScheduleCreated');
  }
  
}
  const handleChangeHospital = (Hospital, value)=>{
    setState({...state, [Hospital]: value})
  }
    return (
        <Box safeArea p="2" py="8" w="90%" maxW="400">
        <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              Appointment Schedule.       
            </Heading>
        <Center>
          
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose medical center</FormControl.Label>
        <FormControl.Label>Hospital:</FormControl.Label>
            <Input  onChangeText={(value)=>handleChangeHospital('Hospital',value)}/>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>



    <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose Doctor</FormControl.Label>
            <Input  onChangeText={(value)=>handleChangeHospital('Doctor',value)}/>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>


        <FormControl.Label>Reason for consultation:</FormControl.Label>
            <Input  onChangeText={(value)=>handleChangeHospital('Reason',value)}/>

  <h6> Select the day and the time required for the appointment: </h6>
            
            <FormControl.Label>Date:</FormControl.Label>
            <Input  onChangeText={(value)=>handleChangeHospital('Date',value)}/>
            
            <FormControl.Label>Time:</FormControl.Label>
            <Input  onChangeText={(value)=>handleChangeHospital('Time',value)}/>


            <Button mt="2" colorScheme="indigo" title="Menu" onPress={()=>citas()} >
            Schedule
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('ScheduleCreated')} >
          Scheduled appointments
          </Button>

      </FormControl>


    </Center>

 
       </Box>
        );}


        export default () => {
            return (
               <NativeBaseProvider>
                 <Center flex={1} px="3">
                     <Schedule/>
                 </Center>
               </NativeBaseProvider>
             );
              
        };