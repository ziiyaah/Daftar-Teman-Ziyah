import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Ghai = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Ghai.jpeg')}
        judul="Ghaisani insyira"
        lahir="29 Juni 2005"
        umur="19 Tahun"
        tinggal="Nanggeleng, Kota Sukabumi"
        status="Mahasiswa Politeknik Sukabumi"
        telpon="0856-9774-6766"
        email="ghaisanicancan@gmail.com"
        quotes="Cintailah musik karna setiap alunan merupakan gambaran emosi serta cerita di "/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Ghai;