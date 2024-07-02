import React from 'react'
import {Text, View, Stylesheet, Button} from 'react-native';
import Contact from './Kontak'

const Home=({navigation}) =>{
  return(
    <View>
    <Contact 
        gambar={require('../assets/Aisya.jpeg')}
        judul="Aisya Syakira purnama"
        status="Mahasiswa"
        telpon="0857-6450-3792"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Aisya Syakira Purmama')}/>
    <Contact 
        gambar={require('../assets/Fathan.jpg')}
        judul="Muhammad Fathan"
        status="Mahasiswa"
        telpon="0895-3800-4348"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Muhammad Fathan')}/>
    <Contact 
        gambar={require('../assets/Ghai.jpeg')}
        judul="Ghaisani Insyira"
        status="Mahasiswa"
        telpon="0856-9774-6766"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Ghaisani Insyira')}/>
    <Contact 
        gambar={require('../assets/Ilham.jpeg')}
        judul="Muhammad Ilham Hidayat"
        status="Konten Creator"
        telpon="0857-9731-0882"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Muhammad Ilham Hidayat')}/>
    <Contact 
        gambar={require('../assets/Nadzifa.jpeg')}
        judul="Nadzifa Aurora Refah Hermansyah"
        status="Mahasiswa"
        telpon="0856-8327-681"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Nadzifa Aurora Refah Hermansyah')}/>
    <Contact 
        gambar={require('../assets/Zakia.jpeg')}
        judul="Zakia Nursyafiya Sidiq"
        status="Mahasiswa"
        telpon="0896-6915-1018"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Zakia Nursyafiya Sidiq')}/>
    </View>
  )
};

export default Home;