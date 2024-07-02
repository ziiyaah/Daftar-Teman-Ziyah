import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Zakia = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Zakia.jpeg')}
        judul="Zakia Nursyafiya Sidiq"
        lahir="04 Januari 2002"
        umur="22 Tahun"
        tinggal="Karamat, Kota Sukabumi"
        status="Mahasiswi Universitas Indonesia"
        telpon="0896-6915-1018"
        email="Zakianursyafiya@gmail.com"
        quotes="Solat adalah tiang agama"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Zakia;