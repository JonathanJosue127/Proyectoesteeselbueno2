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



const Menu = () => {
  const handleSignOut = () =>{
    auth
    .signOut()
    .then(()=>{
      navigation.replace('Login')
    })
    .catch(error => alert(error.message))
  }
  const navigation = useNavigation();

    return (
<Box safeArea p="2" py="8" w="90%" maxW="400">
 

        <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              The you Care team welcomes you.            
            </Heading>
        

          
            <FormControl.Label>The people, the technology and this organization are prepared to provide you with comprehensive care that facilitates the rapid use of the medical services that we offer.</FormControl.Label>

            <Heading   size="sm" fontWeight="600"  _dark={{
            color: "black"
          }}>
            <h6> We thank you in advance for your cooperation and wish you a pleasant experience. </h6>
            
            </Heading>

            <Image style={{ width: 350, height: 180, marginBottom: 15 }} source={require("./Imagenes/Menuimg.jpg")}/>
            <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('MedicalApppoint')} >
            Medical appointment
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Schedule')} >
            Schedule appointment          
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('RecipesUser')} >
            Recipes          
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Catalogue')} >
            Catalogue
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('DocSerInf')} >
            Information about doctors and services
          </Button>


          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('MedRec')} >
            Medical record
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Settings')} >
            Settings
          </Button>
          
          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Contact')} >
            About us
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Profile')} >
            Profile
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={handleSignOut} >
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
                <Menu/>
            </Center>
          </NativeBaseProvider>
        );
         
   };


  
        