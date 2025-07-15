import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import WeekCarrousel from "../../components/WeekCarrousel";
import { useState } from "react";
import { Config } from "@/constants/config";
import { SecundaryDailyTabs } from "@/components/SecundaryDailyTabs";
type MainTabType = "habits" | "tasks";

export default function Index() {
  const [selectedMainTab, setMainTab] = useState<MainTabType>("habits");

  return (
    <View>
      <StatusBar />
      <Text style={styles.title}>My Tasks</Text>
      <View>
        <WeekCarrousel />
      </View>
      <View style={styles.mainTabsContainer}>
        <TouchableOpacity
          style={[
            styles.mainTabs,
            selectedMainTab === "habits" && styles.selectedMainTab,
          ]}
          onPress={() => setMainTab("habits")}
        >
          <Text style={styles.mainTabText}>Habits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.mainTabs,
            selectedMainTab === "tasks" && styles.selectedMainTab,
          ]}
          onPress={() => setMainTab("tasks")}
        >
          <Text style={styles.mainTabText}>Task</Text>
        </TouchableOpacity>
      </View>

      <View>
        <SecundaryDailyTabs />
      </View>
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
