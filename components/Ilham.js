import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Ilham= ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Ilham.jpeg')}
        judul="Muhammad Ilham Hidayat"
        lahir="13 April 2002"
        umur="22 Tahun"
        tinggal="Tipar, Kota Sukabumi"
        status="Konten Creator"
        telpon="0857-9731-0882"
        email="hidayatilham@gmail.com"
        quotes="Tetaplah hidup meskipun hidupmu berat"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Ilham;