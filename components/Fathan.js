import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Fathan = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Fathan.jpg')}
        judul="Muhammad Fathan"
        lahir="31 Juli 2005"
        umur="18 Tahun"
        tinggal="Cipoho, Kota Sukabumi"
        status="Mahasiswa Universitas Linggabuana"
        telpon="0895-3800-4348"
        email="Fathan21@gmail.com"
        quotes="Hiduplah seperti air mengalir, karna air adalah kehidupan"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Fathan;