import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DiaryClicker() {
  return (
    <View style={styles.box}>
      <Text>DiaryClicker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    width:"40%",
    backgroundColor:"red",
    height:190,
    borderRadius:4
  }
});

