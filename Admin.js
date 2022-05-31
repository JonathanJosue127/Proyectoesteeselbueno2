import * as React from "react";
import { Box, Heading, View, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { auth } from "./firebase";


const Drawer = createDrawerNavigator()



const Admin = () => {
 
  const navigation = useNavigation();

    return (
<Box safeArea p="2" py="8" w="90%" maxW="400">
 

        <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
             Welcome Admin            
            </Heading>
        

          
            
            <Heading   size="sm" fontWeight="600"  _dark={{
            color: "black"
          }}>
           
            </Heading>

            <Image style={{ width: 350, height: 180, marginBottom: 15 }} source={require("./Imagenes/Menuimg.jpg")}/>
           
            <Button mt="2" colorScheme="indigo" title="Menu" onPress={()=> navigation.navigate('Recipes')} >
            Recipes
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={()=> navigation.navigate('ScheduleAdmin')} >
            Schedules
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={()=> navigation.navigate('Login')} >
            Logout
          </Button>
</Box>

    );}

//inicio

//fin

    export default () => {
       return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Admin/>
            </Center>
          </NativeBaseProvider>
        );
         
   };


  
        