import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DetailsComponent() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.container_base_text}>Arrow</Text>
        <Text style={[styles.text_header, styles.container_base_text]}>Details </Text>
      </View>

      <View style={styles.container_2}>
        <Text style={styles.container_base_text}>lorem</Text>
      </View>

      <View style={[styles.container_3, styles.container_base]}>
        <Text style={styles.container_base_text}>
          AAAAAABBBBBBCCCCCCDDDDDAAAAAABBBBBBCCCCCCDDDDDAAAAAABBBBBBCCCCCCDDDDD
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_base: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 30,
    flexDirection: "row",
  },

  header: {
    backgroundColor: "#424",
    height:75,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  container_2: {
    backgroundColor: "#524",
  },
  container_3: {
    backgroundColor: "#624",
  },
  container_base_text: {
    color: "#fff",
    textOverflow: "Ellipsis",
  },
  text_header:{
  textTransform:"uppercase"
  }
});
