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
    } 
    else if (selectedMainTab === "Tasks") {
      return <TasksComponent />;
    }
  }

  return (
    <View>
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
    backgroundColor: Config.activeThemeColor,
    paddingVertical: 2,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 90,
  },
  selectedMainTab: {
    backgroundColor: Config.themeColor,
  },
  mainTabText: {
    color: Config.dark ? "#eee" : "#000",
  },
});
