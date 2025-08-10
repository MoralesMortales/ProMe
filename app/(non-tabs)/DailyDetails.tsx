import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

export default function DetailsComponent() {
  return (
    <View>
      <View style={styles.header}>
        <Image source={icons.Arrow} />
        <Text style={[styles.text_header]}>Details </Text>
      </View>

      <View style={styles.titleSection}>
        <View style={styles.logo}></View>
        <Text style={styles.container_base_text}>Cocinar</Text>
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
    alignItems:"center",
    gap:50,
    paddingLeft:30
  },
  titleSection: {
    backgroundColor: "#524",
    height:40,
    paddingLeft:30,
    flexDirection:"row",
    alignItems:"center",
    gap:20
  },
  container_3: {
    backgroundColor: "#624",
  },
  container_base_text: {
    color: "#fff",
    textOverflow: "Ellipsis",
  },
  text_header:{
  textTransform:"uppercase",
    color:"#fff",
    fontSize:20
  },
  logo:{
    backgroundColor:"#fff",
    height:"100%",
    width:40,
    borderRadius:90
  }
});
