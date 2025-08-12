import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { HabitQuantity } from "./HabitQuantity";
import { HabitHourly } from "./HabitHourly";
import { SecondaryDailyTabs } from "./SecondaryDailyTabs";

export default function TasksComponent() {
  return (
    <View>
      <SecondaryDailyTabs componentUsing="Tasks"/>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <HabitHourly />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollView: {
  },
  scrollContent: {
    paddingBottom: 37,
  },
});
