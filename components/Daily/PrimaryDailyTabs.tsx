import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Config } from "@/constants/config";

type MainTabType = "habits" | "tasks";

interface MainTabsProps {
  selectedMainTab: 'Habits' | 'Tasks';
  onTabChange: (tab: 'Habits' | 'Tasks') => void;
}

export default function PrimaryDailyTabs({ selectedMainTab, onTabChange }: MainTabsProps) {
  // const [selectedMainTab, setMainTab] = useState<MainTabType>("habits");

  return (
    <View style={styles.mainTabsContainer}>
      <TouchableOpacity
        style={[
          styles.mainTabs,
          selectedMainTab === "Habits" && styles.selectedMainTab,
        ]}
        onPress={() => onTabChange("Habits")}
      >
        <Text style={styles.mainTabText}>Habits</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.mainTabs,
          selectedMainTab === "Tasks" && styles.selectedMainTab,
        ]}
        onPress={() => onTabChange("Tasks")}
      >
        <Text style={styles.mainTabText}>Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  mainTabs: {
    backgroundColor: Config.secondaryColor,
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
    color: Config.primaryTextColor,
  },
});
