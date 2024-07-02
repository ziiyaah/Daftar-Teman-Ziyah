import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Contact(props) {
  return(
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img}/>
      <View style={styles.teks}>
        <Text style={styles.title}>{props.judul}</Text>
        <Text style={styles.status}>{props.status}</Text>
        <Text style={styles.telp}>{props.telpon}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:96,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'white'
  },

  img:{
    margin:15,
    width:70,
    height:70
  },

  teks:{
    fontSize:15
  },
  
  title:{
    fontWeight:'bold',
    fontSize:20
  }
})