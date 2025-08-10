import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { HabitQuantity } from "./HabitQuantity";
import { HabitHourly } from "./HabitHourly";
import { SecondaryDailyTabs } from "./SecondaryDailyTabs";

export default function HabitsComponent() {
  return (
    <View>
      <SecondaryDailyTabs componentUsing="Habits"/>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <HabitQuantity />
        <HabitHourly />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
        <HabitQuantity />
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
    height: "60%",
  },
  scrollContent: {
    paddingBottom: 37,
  },
});
