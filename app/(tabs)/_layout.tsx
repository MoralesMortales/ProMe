import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useAddButton } from "@/components/AddButtonProvider";
import { Config } from "@/constants/config";

const TabBarIcon = ({ focused, icon }: { focused: boolean; icon: any }) => (
  <View style={styles.tabContainer}>
    <Image
      style={styles.tab}
      source={icon}
      tintColor={focused ? Config.primaryColor : Config.secundaryColor_2}
    />
  </View>
);

const TabLayout = () => {
  const { triggerAddButton, currentTab } = useAddButton();

  return (
       <Tabs
      initialRouteName={currentTab}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarButton: (props) => {
          const isAddButton = route.name === 'Add';
          
          return (
            <TouchableWithoutFeedback
              {...props}
              onPress={(e) => {
                if (isAddButton) {
                  e.preventDefault();
                  triggerAddButton(currentTab);
                } else {
                  props.onPress?.(e);
                }
              }}
            >
              <View style={styles.tabButton}>
                {props.children}
              </View>
            </TouchableWithoutFeedback>
          );
        },
      })}
    >      <Tabs.Screen
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

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    shadowColor: "transparent",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: 44,
    flex: 1,
    flexGrow: 1,
    marginTop: 4,
    marginBottom: 19,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tab: {
    width: 24,
    height: 24,
  },
});

export default TabLayout;
