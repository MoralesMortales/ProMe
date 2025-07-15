import { Link } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import WeekCarrousel from "../../components/WeekCarrousel";
import { useState } from "react";

export default function Index() {
  const [selectedMainTab, setMainTab] = useState(null);

  return (
    <View>
      <StatusBar />
      <Text style={styles.title}>My Tasks</Text>
      <View>
        <WeekCarrousel />
      </View>
      <View style={styles.mainTabsContainer}>
        <TouchableOpacity
          style={styles.mainTabs}
          onPress={() => setMainTab("habits")}
        >
          <Text>Habits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainTabs}
          onPress={() => setMainTab("tasks")}
        >
          <Text>Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const themeColor = "#555";
const activeThemeColor = "#888";
const passiveThemeColor = "#aaa";
const dark = false;

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
    backgroundColor: activeThemeColor,
    paddingVertical: 2,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:90
  },
});
