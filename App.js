import react from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home'
import Contact from './components/Kontak'
import Lengkap from './components/lengkap'
import Aisya from './components/Aisya'
import Fathan from './components/Fathan'
import Ghai from './components/Ghai'
import Ilham from './components/Ilham'
import Nadzifa from './components/Nadzifa'
import Zakia from './components/Zakia'


const Stack=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Daftar Teman Dekat" component={Home}/>
    <Stack.Screen name="Detail Aisya Syakira Purnama" component={Aisya}/>
    <Stack.Screen name="Detail Muhammad Fathan" component={Fathan}/>
    <Stack.Screen name="Detail Ghaisani Insyira" component={Ghai}/>
    <Stack.Screen name="Detail Muhammad Ilham Hidayat" component={Ilham}/>
    <Stack.Screen name="Detail Nadzifa Aurora Refah Hermansyah" component={Nadzifa}/>
    <Stack.Screen name="Detail Zakia Nursyafiya Sidiq" component={Zakia}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}