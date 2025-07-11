import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { Image, StyleSheet, View } from "react-native";

const themeColor = "#000";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                style={styles.tab}
                source={icons.Sun}
                tintColor={themeColor}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: "Calendar",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                style={styles.tab}
                source={icons.Sun}
                tintColor={themeColor}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Daily"
        options={{
          title: "Daily",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                style={styles.tab}
                source={icons.Sun}
                tintColor={themeColor}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Add"
        options={{
          title: "Add",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                style={styles.tab}
                source={icons.Sun}
                tintColor={themeColor}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Diary"
        options={{
          title: "Diary",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                style={styles.tab}
                source={icons.Sun}
                tintColor={themeColor}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                style={styles.tab}
                source={icons.Sun}
                tintColor={themeColor}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  tab: {},
  tabContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: 44,
    flex: 1,
    flexGrow: 1,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
