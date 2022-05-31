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
const Recipes = (props) => {
  const navigation = useNavigation();
//Colección: Recipes
//Valores: Usuario, Medicamento
  const [state,setState] = useState({
    Usuario: '',
    Medicamento: ''
  });
//Altas
const citas = async() =>{
  if (state.Usuario ==='' || state.Medicamento ===''){
    alert('Please complete all fields')
  }else {
    console.log(state)
    firebase.db.collection('Recipe').add({
      Usuario: state.Usuario,
      Medicamento: state.Medicamento

    })
    alert('Recipe created')
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
        <FormControl.Label>User:</FormControl.Label>
            <Input  onChangeText={(value)=>handleChangeHospital('Usuario',value)}/>
        
      </FormControl>
    </Center>



    <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Medicamento:</FormControl.Label>
            <Input  onChangeText={(value)=>handleChangeHospital('Medicamento',value)}/>
        

            <Button mt="2" colorScheme="indigo" title="Menu" onPress={()=>citas()} >
            Recipes
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={()=> navigation.navigate('RecipeCreated')} >
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
                     <Recipes/>
                 </Center>
               </NativeBaseProvider>
             );
              
        };