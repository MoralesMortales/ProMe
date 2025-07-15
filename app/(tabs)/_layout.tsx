import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from "react-native";
import { Background } from "@react-navigation/elements";

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
          backgroundColor: "transparent",
          borderColor: "transparent",
          shadowColor: "transparent",
        },
        tabBarButton: (props) => (
          <TouchableWithoutFeedback {...props}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.children}
            </View>
          </TouchableWithoutFeedback>
        ),
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
        name="User"
        options={{
          title: "User",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.User} />
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
    marginBottom:19,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
