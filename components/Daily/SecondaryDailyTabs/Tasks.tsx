import { Config } from "@/constants/config";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

type secondaryTabType = string;

export const SecondaryDailyTabsTasks = () => {
  const [taskTabs, setTabs] = useState<secondaryTabType[]>(["All"]);
  const [selectedsecondaryTaskTab, setsecondaryTab] = useState<secondaryTabType>("All");
  const [newTaskTabCount, setNewTabCount] = useState(1);

 useEffect(() => {
    const loadTabs = async () => {
      try {
        const savedTabs = await AsyncStorage.getItem('@taskTabs');
        const savedSelectedTab = await AsyncStorage.getItem('@selectedsecondaryTaskTab');
        const savedTabCount = await AsyncStorage.getItem('@newTaskTabCount');

        if (savedTabs) setTabs(JSON.parse(savedTabs));
        if (savedSelectedTab) setsecondaryTab(savedSelectedTab);
        if (savedTabCount) setNewTabCount(parseInt(savedTabCount, 10));
      } catch (e) {
        console.error('Error al cargar las pestañas:', e);
      }
    };

    loadTabs();
  }, []);

useEffect(() => {
    const saveTabs = async () => {
      try {
        await AsyncStorage.setItem('@taskTabs', JSON.stringify(taskTabs));
        await AsyncStorage.setItem('@selectedsecondaryTaskTab', selectedsecondaryTaskTab);
        await AsyncStorage.setItem('@newTaskTabCount', newTaskTabCount.toString());
      } catch (e) {
        console.error('Error al guardar las pestañas:', e);
      }
    };

    saveTabs();
  }, [taskTabs, selectedsecondaryTaskTab, newTaskTabCount]);


  const addNewTab = () => {
    const newTabName = `NewTab${newTaskTabCount}`;
    const updatedTabs = [...taskTabs, newTabName];
    setTabs(updatedTabs);
    setNewTabCount(newTaskTabCount + 1);
    setsecondaryTab(newTabName);
  };

  return (
    <View style={styles.secondaryTabsContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {taskTabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.secondaryTabs,
              selectedsecondaryTaskTab === tab && styles.selectedsecondaryTab,
            ]}
            onPress={() => setsecondaryTab(tab)}
          >
            <Text style={styles.secondaryTabText}>{tab}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[
            styles.secondaryTabsPlus,
            selectedsecondaryTaskTab === "+" && styles.selectedsecondaryTab,
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
