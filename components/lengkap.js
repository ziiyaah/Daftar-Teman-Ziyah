import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Lengkap(props) {
  return(
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img}/>
      <View style={styles.teks}>
        <Text style={styles.title}>{props.judul}</Text>
        <Text style={styles.lahir}>{props.lahir}</Text>
        <Text style={styles.umur}>{props.umur}</Text>
        <Text style={styles.tinggal}>{props.tinggal}</Text>
        <Text style={styles.status}>{props.status}</Text>
        <Text style={styles.telp}>{props.telpon}</Text>
        <Text style={styles.email}>{props.email}</Text>
        <Text style={styles.quotes}>{props.quotes}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:750,
    flexDirection:'row',
    alignItems:'top',
    borderBottomWidth:1,
    borderColor:'white'
  },

  img:{
    margin:15,
    width:75,
    height:75,
  },

  teks:{
    fontSize: 18,
    flex:1
  },
  
  title:{
    fontWeight:'bold',
    fontSize:25
  }
})