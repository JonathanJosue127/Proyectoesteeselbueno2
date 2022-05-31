import React from 'react';
import {NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import Menu from './Menu';
import DocSerInf from './DocSerInf';
import 'react-native-gesture-handler';
import MedicalApppoint from './MedicalApppoint';
import Schedule from './Schedule';
import Catalogue from './Catalogue';
import Prescriptions from './Prescriptions';
import MedRec from './MedRec';
import Settings from './Settings';
import Contact from './Contact';
import Profile from './Profile';
import NuevoUs from './NuevoUs';
import ScheduleCreated from './ScheduleCreated';
import ScheduleDetail from './ScheduleDetail';
import Admin from './Admin';
import Recipes from './Recipes';
import RecipeCreated from './RecipeCreated';
import RecipeDetail from './RecipeDetail';
import RecipeUser from './RecipesUser';
import ScheduleAdmin from './ScheduleAdmin';

const Stack = createNativeStackNavigator();
//Ocultar la barra superior que tapa algunos elementos: 
//<Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
export default function App(){
return (
<NavigationContainer>
    <NativeBaseProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />      
          <Stack.Screen screenOptions={{headerShown: false}} name='Menu' component={Menu}/>  
          <Stack.Screen name='MedicalApppoint' component={MedicalApppoint}/>  
          <Stack.Screen name='Schedule' component={Schedule}/> 
          <Stack.Screen name='Catalogue' component={Catalogue}/> 
          <Stack.Screen name='DocSerInf' component={DocSerInf}/> 
          <Stack.Screen name='Prescriptions' component={Prescriptions}/> 
          <Stack.Screen name='MedRec' component={MedRec}/> 
          <Stack.Screen name='Settings' component={Settings}/> 
          <Stack.Screen name='Contact' component={Contact}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='NuevoUs' component={NuevoUs}/>
          <Stack.Screen name='ScheduleCreated' component={ScheduleCreated}/>
          <Stack.Screen name='ScheduleDetail' component={ScheduleDetail}/>
          <Stack.Screen name='Admin' component={Admin}/>
          <Stack.Screen name='Recipes' component={Recipes}/>
          <Stack.Screen name='RecipeCreated' component={RecipeCreated}/>
          <Stack.Screen name='RecipeDetail' component={RecipeDetail}/>
          <Stack.Screen name='RecipesUser' component={RecipeUser}/>
          <Stack.Screen name='ScheduleAdmin' component={ScheduleAdmin}/>
        </Stack.Navigator>
    </NativeBaseProvider>
</NavigationContainer>



);

}


