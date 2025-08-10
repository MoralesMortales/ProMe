import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { Config } from "@/constants/config";

export default function DetailsComponent() {
  return (
    <View>
      <View style={styles.header}>
        <Image source={icons.Arrow} />
        <Text style={[styles.text_header, styles.base_text]}>Details </Text>
      </View>

      <View style={styles.titleSection}>
        <View style={styles.logo}></View>
        <Text style={[styles.logo_text, styles.base_text]}>Cocinar</Text>
      </View>

      <View style={styles.description_container}>
        <Text style={styles.base_text}>Description</Text>
        <Text style={styles.base_text}>
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base_text: {
    color: Config.darkMode ? "#fff" : "#000",
  },

  header: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    gap: 65,
    paddingLeft: 30,
  },

  titleSection: {
    marginTop:20,
    height: 40,
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  
  container_base_text: {
    color: Config.primaryTextColor,
    textOverflow: "Ellipsis",
  },
  
  text_header: {
    textTransform: "uppercase",
    color: "#222",
    fontSize: 30,
  },
  
  logo: {
    height: "100%",
    backgroundColor:"#232",
    width: 40,
    borderRadius: 90,
  },
  
  logo_text: {
    fontSize: 18,
  },

  description_container: {
    gap: 10,
    paddingTop: 10,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
