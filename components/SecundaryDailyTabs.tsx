import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SecundaryTabType = "habits" | "tasks";

const [selectedSecundaryTab, setSecundaryTab] = useState<SecundaryTabType>("habits");

const SecundaryDailyTabs = () => {
  return ( 
      <View style={styles.mainTabsContainer}>
        <TouchableOpacity
          style={[
            styles.mainTabs,
            selectedSecundaryTab === "habits" && styles.selectedMainTab,
          ]}
          onPress={() => setMainTab("habits")}
        >
          <Text style={styles.mainTabText}>Habits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.mainTabs,
            selectedSecundaryTab === "tasks" && styles.selectedMainTab,
          ]}
          onPress={() => setMainTab("tasks")}
        >
          <Text style={styles.mainTabText}>Task</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  mainTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  mainTabs: {
    backgroundColor: activeThemeColor,
    paddingVertical: 2,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 90,
  },
  selectedMainTab: {
    backgroundColor: themeColor,
  },
  mainTabText: {
    color: dark ? "#eee" : "#000",
  },
});

