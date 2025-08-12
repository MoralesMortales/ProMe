import { Config } from "@/constants/config";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type secondaryTabType = string;

export const SecondaryDailyTabsHabits = () => {
  const [tabs, setTabs] = useState<secondaryTabType[]>(["All"]);
  const [selectedsecondaryTab, setsecondaryTab] =
    useState<secondaryTabType>("All");
  const [newTabCount, setNewTabCount] = useState(1);

  const addNewTab = () => {
    const newTabName = `NewTab${newTabCount}`;
    setTabs([...tabs, newTabName]);
    setNewTabCount(newTabCount + 1);
    setsecondaryTab(newTabName);
  };

  return (
    <View style={styles.secondaryTabsContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.secondaryTabs,
              selectedsecondaryTab === tab && styles.selectedsecondaryTab,
            ]}
            onPress={() => setsecondaryTab(tab)}
          >
            <Text style={styles.secondaryTabText}>{tab}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[
            styles.secondaryTabsPlus,
            selectedsecondaryTab === "+" && styles.selectedsecondaryTab,
          ]}
          onPress={addNewTab}
        >
          <Text style={styles.secondaryTabTextPlus}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  secondaryTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingBottom: 10,
  },
  secondaryTabsPlus: {
    backgroundColor: Config.secondaryColor,
    width: 30,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 90,
  },
  secondaryTabTextPlus: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Config.primaryTextColor,
    fontSize: 12,
  },
  secondaryTabs: {
    backgroundColor: Config.secondaryColor,
    paddingVertical: 2,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 90,
    marginRight: 15,
  },
  selectedsecondaryTab: {
    backgroundColor: Config.primaryColor,
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },
  secondaryTabText: {
    color: Config.primaryTextColor,
    fontSize: 9,
  },
});
