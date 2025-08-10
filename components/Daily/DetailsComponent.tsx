import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DetailsComponent() {
  return (
    <View>
      <Text>DedtailsComponent</Text>
      <View style={styles.container_1}>
        <Text>a</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container_1: {
    backgroundColor:"#424",
        
    },
});

