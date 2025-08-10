import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { Config } from "@/constants/config";

import WeekCarrousel from "@/components/Daily/WeekCarrousel";
import PrimaryDailyTabs from "@/components/Daily/PrimaryDailyTabs";
import HabitsComponent from "@/components/Daily/HabitsComponent";
import TasksComponent from "@/components/Daily/TasksComponent";
import { DarkTheme } from "@react-navigation/native";

export default function Index() {
  const [selectedMainTab, setSelectedMainTab] = useState<"Habits" | "Tasks">(
    "Habits",
  );

  function showSelectedTab() {
    if (selectedMainTab === "Habits") {
      return <HabitsComponent />;
    } 
    else if (selectedMainTab === "Tasks") {
      return <TasksComponent />;
    }
  }

  return (
    <View style={styles.themeConfig}>
      <StatusBar />

      <Text style={styles.title}>My Tasks</Text>

      <WeekCarrousel />

      <PrimaryDailyTabs
        selectedMainTab={selectedMainTab}
        onTabChange={setSelectedMainTab}
      />

      {showSelectedTab()}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 7,
    fontSize: 25,
    marginBottom: 20,
  },
  mainTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  scrollView: {
    height: "60%",
  },
  scrollContent: {
    paddingBottom: 37,
  },
  mainTabs: {
    backgroundColor: Config.primaryColor,
    paddingVertical: 2,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 90,
  },
  selectedMainTab: {
    backgroundColor: Config.primaryColor,
  },
  mainTabText: {
    color: Config.primaryTextColor
  },
  themeConfig:{
    backgroundColor: Config.darkMode ? "#4c4c4c" : "#eee",
  }
});
