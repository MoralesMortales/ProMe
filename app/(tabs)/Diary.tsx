import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import DiaryContainer from '@/components/Diary/DiaryContainer';
import { useAddButton } from '@/components/AddButtonProvider';
export default function Diary() {

    const { activate, currentTab } = useAddButton();

  return (
    <View>
      <StatusBar />
      <Text style={styles.title}>My Tasks</Text>
      <View style={styles.container}>
        {activate && currentTab === 'Diary' && (
        <Text>You're in Diary!</Text>
      )}

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


