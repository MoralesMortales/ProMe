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

type SecundaryTabType = string;

export const SecundaryDailyTabsTasks = () => {
  const [taskTabs, setTabs] = useState<SecundaryTabType[]>(["All"]);
  const [selectedSecundaryTaskTab, setSecundaryTab] = useState<SecundaryTabType>("All");
  const [newTaskTabCount, setNewTabCount] = useState(1);

 useEffect(() => {
    const loadTabs = async () => {
      try {
        const savedTabs = await AsyncStorage.getItem('@taskTabs');
        const savedSelectedTab = await AsyncStorage.getItem('@selectedSecundaryTaskTab');
        const savedTabCount = await AsyncStorage.getItem('@newTaskTabCount');

        if (savedTabs) setTabs(JSON.parse(savedTabs));
        if (savedSelectedTab) setSecundaryTab(savedSelectedTab);
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
        await AsyncStorage.setItem('@selectedSecundaryTaskTab', selectedSecundaryTaskTab);
        await AsyncStorage.setItem('@newTaskTabCount', newTaskTabCount.toString());
      } catch (e) {
        console.error('Error al guardar las pestañas:', e);
      }
    };

    saveTabs();
  }, [taskTabs, selectedSecundaryTaskTab, newTaskTabCount]);


  const addNewTab = () => {
    const newTabName = `NewTab${newTaskTabCount}`;
    const updatedTabs = [...taskTabs, newTabName];
    setTabs(updatedTabs);
    setNewTabCount(newTaskTabCount + 1);
    setSecundaryTab(newTabName);
  };

  return (
    <View style={styles.secundaryTabsContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {taskTabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.secundaryTabs,
              selectedSecundaryTaskTab === tab && styles.selectedSecundaryTab,
            ]}
            onPress={() => setSecundaryTab(tab)}
          >
            <Text style={styles.secundaryTabText}>{tab}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[
            styles.secundaryTabsPlus,
            selectedSecundaryTaskTab === "+" && styles.selectedSecundaryTab,
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
