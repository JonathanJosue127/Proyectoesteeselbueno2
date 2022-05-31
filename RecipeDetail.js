import * as React from "react";
import { Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image, View} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { ScrollView,TextInput } from "react-native-gesture-handler";
import { Text, StyleSheet, Label, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import firebase from "./firebase";
import {useEffect, useState} from "react";
import {ListItem, Avatar} from 'react-native-elements'
import { ActivityIndicator } from "react-native-web";
const Drawer = createDrawerNavigator()

const RecipeDetail = (props) => {
const initialState = {
    id:'',
      Usuario:'',
      Medicamento:'',
};
const [loading, setLoading] = useState(true)
     const [user,setUser] = useState(initialState);

const handleChangeHospital = (value, prop)=>{
    setUser({...user, [prop]: value})
  };

 const getSchedulebyid = async(id) =>{
      const dbRef =  firebase.db.collection('Recipe').doc(id);
      const doc = await dbRef.get();
      const user = doc.data();
      setUser({
          ...user,
          id: doc.id,
      });
      setLoading(false)
    };

    useEffect(()=>{
        getSchedulebyid(props.route.params.recipeid);
    },[]);

if (loading){
      return(
          <View>
              <ActivityIndicator size="large" color="#9e9e9e"></ActivityIndicator>
          </View>
      )
  }

  const deleteSchedule = async() =>{
      const dbRef = firebase.db.collection('Recipe').doc(props.route.params.recipeid);
      await dbRef.delete();
      props.navigation.navigate('RecipeCreated')
  }

   const updateschedule = async () =>{
       const userRef = firebase.db.collection('Recipe').doc(user.id)
       await userRef.set({
        Usuario: user.Usuario,
        Medicamento: user.Medicamento,
       });
       setUser(initialState)
       props.navigation.navigate('RecipeCreated')
   
    };

    
    

  const navigation = useNavigation();


  

    return (
      <Center flex={1} px="3">
<Box safeArea p="2" py="8" w="90%" maxW="400">


        <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>

              Schedule detail    
<h1></h1>

            </Heading>
            <Center>
          <FormControl w="3/4" maxW="300" isRequired isInvalid>
            <FormControl.Label>You can change or cancel your recipes here</FormControl.Label>
            <FormControl.Label>User:</FormControl.Label>
                <Input value={user.Usuario} onChangeText={(value)=>handleChangeHospital(value,'Usuario')}/>
          </FormControl>
        </Center>
    
    
    
        <Center>
          <FormControl w="3/4" maxW="300" isRequired isInvalid>
            <FormControl.Label>Medicine:</FormControl.Label>
            
                <Input value={user.Medicamento} onChangeText={(value)=>handleChangeHospital(value,'Medicamento')}/>

    
    
            
    
                <Button mt="2" colorScheme="indigo" title="Menu" onPress={()=>updateschedule()}>
                Change
              </Button>
    
              <Button  mt="2" colorScheme="indigo" title="Menu" onPress={()=>deleteSchedule()} >
              Delete
              </Button>
    
          </FormControl>
    
    
        </Center>
    
            </Box>
</Center>
    );}

    export default RecipeDetail;


/*
    export default () => {
       return (
          <NativeBaseProvider>
            
                <ScheduleDetail/>
            </Center>
          </NativeBaseProvider>
        );
         
   };

*/