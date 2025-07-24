import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import DiaryContainer from '@/components/Diary/DiaryContainer';
export default function Diary() {
  return (
    <View>
      <StatusBar />
      <Text style={styles.title}>My Tasks</Text>
      <View style={styles.container}>
        <DiaryContainer/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    marginHorizontal:7
    },

  title: {
    marginTop: 20,
    marginLeft: 7,
    fontSize: 25,
    marginBottom: 20,
  },

});


