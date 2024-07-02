import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Aisya = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Aisya.jpeg')}
        judul="Aisya Syakira Purnama"
        lahir="21 Mei 2003"
        umur="21 Tahun"
        tinggal="Cicurug, Kabupaten Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0857-6450-3792"
        email="Aisyasyakira@ummi.ac.id"
        quotes="tidak ada kata terlambat untuk menggapai kesuksesan"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Aisya;