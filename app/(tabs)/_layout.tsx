import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { Image, StyleSheet } from "react-native";

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
            <>
              <Image style={styles.tab} source={icons.Sun} tintColor={themeColor} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{ title: "Calendar", headerShown: false }}
      />

      <Tabs.Screen
        name="Daily"
        options={{ title: "Daily", headerShown: false }}
      />

      <Tabs.Screen name="Add" options={{ title: "Add", headerShown: false }} />

      <Tabs.Screen
        name="Diary"
        options={{ title: "Diary", headerShown: false }}
      />

      <Tabs.Screen
        name="Settings"
        options={{ title: "Settings", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#000",
  },
});
