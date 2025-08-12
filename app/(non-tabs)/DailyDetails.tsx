import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { Config } from "@/constants/config";
import AssignTagDaily from "@/components/Daily/Details/Habits/AssignTagDaily";
import AssignTypeDaily from "@/components/Daily/Details/Habits/AssignTypeDaily";

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
          Description Description Description Description
        </Text>
      </View>

      <View style={styles.hr}></View>

      <AssignTagDaily/>
      <AssignTypeDaily/>

            <View style={styles.hr}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  choose_list_container: {
    marginTop: 30,
    gap: 45,
  },

  choose_list_line: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 90,
  },

  choose_list: {
    backgroundColor: "#ff4",
  },

  base_text: {
    color: Config.darkMode ? "#eee" : "#000",
  },

  header: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    gap: 65,
    paddingLeft: 30,
  },

  hr: {
    height: 0.71,
    backgroundColor: Config.darkMode ? "#eee" : "#000",
  },

  titleSection: {
    marginTop: 20,
    height: 40,
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  container_base_text: {
    textOverflow: "Ellipsis",
  },

  text_header: {
    textTransform: "uppercase",
    color: "#222",
    fontSize: 30,
  },

  logo: {
    height: "100%",
    backgroundColor: "#232",
    width: 40,
    borderRadius: 90,
  },

  logo_text: {
    fontSize: 18,
  },

  description_container: {
    gap: 10,
    paddingTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
