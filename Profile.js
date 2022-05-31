import * as React from "react";
import { Checkbox, Radio, Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { auth } from "./firebase";

const Drawer = createDrawerNavigator()

const Profile = () => {
  const navigation = useNavigation();
  

    return (

        <Box safeArea p="2" py="8" w="90%" maxW="400">
             <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              Profile           
            </Heading>

            <div align="center"><Image style={{ width: 150, height: 150, marginBottom: 15 }} source={'https://th.bing.com/th/id/R.123a2762616b39c65fe8a1a121252ccd?rik=UGyHjXnEbIV78g&pid=ImgRaw&r=0'}/></div>
            
            <FormControl.Label>Email:</FormControl.Label>
            <FormControl.Label>{auth.currentUser?.email}</FormControl.Label>

            <FormControl.Label>Password:</FormControl.Label>
            <FormControl.Label>************</FormControl.Label>
        <h1></h1>

            <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Settings')} >
            Change Password
          </Button>

          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Profile')} >
            Edit Information
          </Button>
            </Box>

            
        

     );}

    //inicio
    
    //fin
    
        export default () => {
           return (
              <NativeBaseProvider>
                <Center flex={1} px="3">
                    <Profile/>
                </Center>
              </NativeBaseProvider>
            );
             
       };
    