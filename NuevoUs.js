import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { View, Image, StyleSheet } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import { auth } from "./firebase";
function NuevoUs  () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigation = useNavigation();

  const handleSignup = () => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials=>{
      const user = userCredentials.user;
      console.log("Usuario registrado",user.email);
    }) 
    .catch(error => alert(error.message))
  }

  return ( 
  <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="400">
        
        
    <div align= "center">  <Image style={{ width: 280, height: 280, marginBottom: 15 }} source={require("./Imagenes/sign.png")}/>
        </div>
        
        <div align= "center">
        <Heading   size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Sign Up!
        </Heading>
        </div>
        <div align= "center">
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Log in
        </Heading>
        </div>
        <VStack space={3} mt="6">
          <FormControl>
            <FormControl.Label  >Email</FormControl.Label>
            <Input onChangeText={text=>setEmail(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={text=> setPassword(text)}/>
          </FormControl>
          <Button mt="2" colorScheme="indigo" title="Menu" onPress={handleSignup} >
            Submit
          </Button>
        </VStack>
      </Box>
    </Center>
  );}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <NuevoUs/>
            </Center>
          </NativeBaseProvider>
        );
        
         
   };
