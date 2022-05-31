import * as React from "react";
import { Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import firebase from "./firebase";
import {useEffect, useState} from "react";
import {ListItem, Avatar} from 'react-native-elements'
const Drawer = createDrawerNavigator()

const ScheduleAdmin = (props) => {
  const navigation = useNavigation();

  

  //mostrar owo
  
  const [showSchedule,setSchedule] = useState([])
  useEffect(()=>{
      firebase.db.collection('Schedule').onSnapshot(querySnapshot =>{
          const showSchedule = [];
          querySnapshot.docs.forEach(doc=>{
              console.log(doc.data())
              const {Centro,Medico,Motivo,Fecha,Hora} = doc.data()
              showSchedule.push({
                  id:doc.id,
                  Centro,
                  Medico,
                  Motivo,
                  Fecha,
                  Hora
              })
          });
          console.log(showSchedule)
          setSchedule(showSchedule)


      });

  },[]);
//Finmostrar

  
    return (
      <Center flex={1} px="3">
<Box safeArea p="2" py="8" w="90%" maxW="400">

<h1></h1>
<h1></h1>
<h1></h1>
<h1></h1>
<h1></h1>
<h1></h1>

        <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>

              Schedule Created    
<h1></h1>
            <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
      </VStack>  

            </Heading>

            <h1></h1>
            
                
            <ScrollView>
                {
                    showSchedule.map(schedule =>{

                       return(
                           <ListItem key={schedule.id} bottomDivider >
                               <ListItem.Chevron></ListItem.Chevron>
                               <Avatar source={{uri:'https://th.bing.com/th/id/OIP.d5IhBahQ-9Pz9LjEQsOtiwHaHa?pid=ImgDet&rs=1'}} rounded></Avatar>
                                   <ListItem.Content>
                                       <ListItem.Title> {schedule.Centro}</ListItem.Title>
                                       <ListItem.Subtitle>{schedule.Medico}</ListItem.Subtitle>
                                       <ListItem.Subtitle>{schedule.Motivo}</ListItem.Subtitle>
                                       <ListItem.Subtitle>{schedule.Fecha}</ListItem.Subtitle>
                                       <ListItem.Subtitle>{schedule.Hora}</ListItem.Subtitle>
                                    </ListItem.Content>
                               
                           </ListItem>
                       ) 
                    })
                        
                    
                }



            </ScrollView>



      
            
            </Box>
            </Center>

    );}


//No sirve para pasar los props
   /* export default () => {
       return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <ScheduleCreated/>
            </Center>
          </NativeBaseProvider>


        );*/

        export default ScheduleAdmin;

         
   //};

