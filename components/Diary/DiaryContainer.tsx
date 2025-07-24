import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DiaryClicker from './DiaryClicker';
export default function DiaryContainer() {
  return (
    <View style={styles.container}>
    <DiaryClicker/>
    <DiaryClicker/>
    <DiaryClicker/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    width:"96%",
    marginHorizontal:"auto",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    rowGap:46
        
    },
});

