import { Config } from "@/constants/config";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type SecundaryTabType = "habits" | "tasks" | "+";

export const SecundaryDailyTabs = () => {
  const [selectedSecundaryTab, setSecundaryTab] =
    useState<SecundaryTabType>("habits");

  return (
    <View style={styles.secundaryTabsContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={[
            styles.secundaryTabs,
            selectedSecundaryTab === "habits" && styles.selectedSecundaryTab,
          ]}
          onPress={() => setSecundaryTab("habits")}
        >
          <Text style={styles.secundaryTabText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.secundaryTabs,
            selectedSecundaryTab === "tasks" && styles.selectedSecundaryTab,
          ]}
          onPress={() => setSecundaryTab("tasks")}
        >
          <Text style={styles.secundaryTabText}>Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.secundaryTabsPlus,
            selectedSecundaryTab === "+" && styles.selectedSecundaryTab,
          ]}
          onPress={() => setSecundaryTab("+")}
        >
          <Text style={styles.secundaryTabTextPlus}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  secundaryTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  secundaryTabsPlus: {
    backgroundColor: Config.activeThemeColor,
    width: 30,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 90,
  },
  secundaryTabTextPlus: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Config.dark ? "#eee" : "#000",
    fontSize: 12,
  },
  secundaryTabs: {
    backgroundColor: Config.activeThemeColor,
    paddingVertical: 2,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 90,
    marginRight: 15,
  },
  selectedSecundaryTab: {
    backgroundColor: Config.themeColor,
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },
  secundaryTabText: {
    color: Config.dark ? "#eee" : "#000",
    fontSize: 9,
  },
});
