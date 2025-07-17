import { Config } from "@/constants/config";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type SecundaryTabType = string;

export const SecundaryDailyTabs = () => {
  const [tabs, setTabs] = useState<SecundaryTabType[]>(["All"]);
  const [selectedSecundaryTab, setSecundaryTab] =
    useState<SecundaryTabType>("All");
  const [newTabCount, setNewTabCount] = useState(1);

  const addNewTab = () => {
    const newTabName = `NewTab${newTabCount}`;
    setTabs([...tabs, newTabName]);
    setNewTabCount(newTabCount + 1);
    setSecundaryTab(newTabName);
  };

  return (
    <View style={styles.secundaryTabsContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.secundaryTabs,
              selectedSecundaryTab === tab && styles.selectedSecundaryTab,
            ]}
            onPress={() => setSecundaryTab(tab)}
          >
            <Text style={styles.secundaryTabText}>{tab}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[
            styles.secundaryTabsPlus,
            selectedSecundaryTab === "+" && styles.selectedSecundaryTab,
          ]}
          onPress={addNewTab}
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
