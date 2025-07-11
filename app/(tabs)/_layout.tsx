import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { Image, StyleSheet, View } from "react-native";

const themeColor = "#000";
const activeThemeColor = "#999";
const dayTheme = false;

const TabBarIcon = ({ focused, icon }: { focused: any; icon: any }) => (
  <View style={styles.tabContainer}>
    <Image
      style={styles.tab}
      source={icon}
      tintColor={focused ? themeColor : activeThemeColor}
    />
  </View>
);

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: dayTheme ? "#000" : "#fff",
          borderColor:"transparent",
          shadowColor:"transparent"
        }
      }}
    >
      <Tabs.Screen
        name="Calendar"
        options={{
          title: "Calendar",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.Calendar} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Daily",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.Sun} />
          ),
        }}
      />

      <Tabs.Screen
        name="Add"
        options={{
          title: "Add",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.Plus} />
          ),
        }}
      />

      <Tabs.Screen
        name="Diary"
        options={{
          title: "Diary",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.Book} />
          ),
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.Settings} />
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
