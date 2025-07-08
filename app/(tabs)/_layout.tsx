import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            bottom: 0,
            paddingBottom:0,

          },
          default: {
            paddingBottom:0,
          },
        }),
tabBarItemStyle: {
  flexDirection: "row",
  alignItems: "center", 
},
      }}
    >
      <Tabs.Screen
        name="views/Diary"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                padding: 10,
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <IconSymbol size={28} name="bookOpen" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="views/Daily"
        options={{
          title: "Home",
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="plus" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="views/Quotes"
        options={{
          title: "Explore",
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="feather" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="feather" color={color} />
          ),
          href: null,
        }}
      />
            <Tabs.Screen
        name="views/Config"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="feather" color={color} />
          ),
          href: null,
        }}
      />
    </Tabs>
  );
}
