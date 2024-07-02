import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Nadzifa = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Nadzifa.jpeg')}
        judul="Nadzifa Aurora Refah Hermasyah"
        lahir="05 Mei 2005"
        umur="19 Tahun"
        tinggal="Jl Brawijaya, Kota Sukabumi"
        status="Mahasiswa Universitas Pasundan"
        telpon="0856-8327-681"
        email="Nadzifananas@gmail.com"
        quotes="Keberhasilan dimulai impian yang besar"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Nadzifa;