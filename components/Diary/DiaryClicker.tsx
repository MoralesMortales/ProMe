import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DiaryClicker() {
  return (
    <View style={styles.box}>
      
      <View style={styles.below}>
      <Text style={styles.text}>DiaryClicker</Text>
      <Text style={styles.page}>22 Pages</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    width:"40%",
    backgroundColor:"#464",
    height:190,
    borderRadius:4,
    position:"relative"
  },
  below:{
    position: "absolute",
    bottom:-30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%"
  },
  page:{
    fontSize:10,
    textAlign:"right"
  },
  text:{
    fontSize:15
  }

});

