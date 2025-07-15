import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const WeekCarrousel = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  // Generate week days with dates
  const generateWeekDays = (date: any) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Find the most recent Monday (or Sunday if you prefer)
    const monday = new Date(date);
    monday.setDate(date.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    const weekDaysArray = [];

    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(monday);
      dayDate.setDate(monday.getDate() + i);

      weekDaysArray.push({
        name: days[dayDate.getDay()].substring(0, 3), // Short name (Mon, Tue, etc.)
        date: dayDate.getDate(),
        month: dayDate.getMonth(),
        fullDate: dayDate,
      });
    }

    return weekDaysArray;
  };

  // Update week days when date changes
  useEffect(() => {
    const days = generateWeekDays(currentDate);
    setWeekDays(days);

    // Select today by default
    const todayIndex = days.findIndex(
      (day) => day.fullDate.toDateString() === new Date().toDateString(),
    );
    if (todayIndex !== -1) {
      setSelectedDay(todayIndex);
    }
  }, [currentDate]);

  // Auto-update to current date every day
  useEffect(() => {
    const interval = setInterval(
      () => {
        const now = new Date();
        if (now.toDateString() !== currentDate.toDateString()) {
          setCurrentDate(now);
        }
      },
      1000 * 60 * 60,
    ); // Check every hour

    return () => clearInterval(interval);
  }, [currentDate]);

  return (
    <View style={styles.container}>
      {weekDays.map((day, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dayContainer,
            selectedDay === index && styles.selectedDay,
          ]}
          onPress={() => setSelectedDay(index)}
        >
          <Text style={styles.dayName}>{day.name}</Text>
          <Text style={styles.dayDate}>{day.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const themeColor = "#555";
const activeThemeColor = "#888";
const passiveThemeColor = "#aaa";
const dark = false;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 6,
    backgroundColor: themeColor,
    borderRadius:6,
  },
  dayContainer: {
    alignItems: "center",
    flexDirection:"column-reverse",
    paddingTop: 6,
    paddingBottom:4,
    paddingHorizontal: 6,
    borderTopLeftRadius:90,
    borderTopRightRadius:90,
    gap:5,
    borderRadius: 10,
  },
  selectedDay: {
    backgroundColor: activeThemeColor,
  },
  dayName: {
    color: dark ? themeColor : "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  dayDate: {
    color: dark ? themeColor : "#fff",
    backgroundColor: passiveThemeColor,
paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius:90,
    fontSize: 16,
  },
  selectedDayText: {
    color: "#fff",
  },
});

export default WeekCarrousel;
