import * as React from "react";
import { Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//No se usa esta pantalla
const Drawer = createDrawerNavigator()

const Prescriptions = () => {
  const navigation = useNavigation();

    return (


        <Box safeArea p="2" py="8" w="90%" maxW="400">
            

            <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              Prescriptions            
            </Heading>


            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://img.gruporeforma.com/imagenes/960x640/5/850/4849365.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            23/03/2022
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Stomach flu
            </Heading>
          </Stack>
          <Button mt="2" colorScheme="indigo" title="Menu"  >
            Open
          </Button>
          <Button mt="2" colorScheme="indigo" title="Menu"  >
            Enable Notifications 
          </Button>
          <HStack alignItems="center" space={4} justifyContent="space-between">
           
          </HStack>
        </Stack>
      </Box>
    
<h1></h1>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://ishamommyblog.files.wordpress.com/2013/01/20130122-082033.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            01/01/2022
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Pharyngitis
            </Heading>
          </Stack>
          <Button mt="2" colorScheme="indigo" title="Menu"  >
            Open
          </Button>
          <Button mt="2" colorScheme="indigo" title="Menu"  >
            Enable Notifications 
          </Button>
          <HStack alignItems="center" space={4} justifyContent="space-between">
           
          </HStack>
        </Stack>
      </Box>
    




            </Box>
        );}

        //inicio
        
        //fin
        
            export default () => {
               return (
                  <NativeBaseProvider>
                    <Center flex={1} px="3">
                        <Prescriptions/>
                    </Center>
                  </NativeBaseProvider>
                );
                 
           };
        
        