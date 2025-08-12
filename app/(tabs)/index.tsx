import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { Config } from "@/constants/config";

import WeekCarrousel from "@/components/Daily/WeekCarrousel";
import PrimaryDailyTabs from "@/components/Daily/PrimaryDailyTabs";
import HabitsComponent from "@/components/Daily/HabitsComponent";
import TasksComponent from "@/components/Daily/TasksComponent";

export default function Index() {
  const [selectedMainTab, setSelectedMainTab] = useState<"Habits" | "Tasks">(
    "Habits",
  );

  function showSelectedTab() {
    if (selectedMainTab === "Habits") {
      return <HabitsComponent />;
    } else if (selectedMainTab === "Tasks") {
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
    color: Config.darkMode ? "#eee" : "#000",
  },

 
  themeConfig: {
    backgroundColor: Config.darkMode ? "#4c4c4c" : "#eee",
    flexGrow:1,
  },
});
