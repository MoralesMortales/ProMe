import { Config } from "@/constants/config";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const WeekCarrousel = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const scrollViewRef = useRef(null);

  const { width } = Dimensions.get("window");
  const itemWidth = width / 7;

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
    monday.setDate(date.getDate() - 7);

    const weekDaysArray = [];

    for (let i = 0; i < 21; i++) {
      const dayDate = new Date(monday);
      dayDate.setDate(monday.getDate() + i);

      weekDaysArray.push({
        name: days[dayDate.getDay()].substring(0, 3), // Short name (Mon, Tue, etc.)
        date: dayDate.getDate(),
        month: dayDate.getMonth(),
        fullDate: dayDate,
        isToday: dayDate.toDateString() === new Date().toDateString(),
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

      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: todayIndex * itemWidth - (width / 2 - itemWidth / 2),
          animated: true,
        });
      }, 100);
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
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        decelerationRate={"fast"}
      >
        {weekDays.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              { width: itemWidth },
            ]}
            onPress={() => setSelectedDay(index)}
          >
            <View style={[
              styles.dayContainer,
              selectedDay === index && styles.selectedDay,
              { width: itemWidth },
              day.isToday && !(selectedDay === index) && styles.todayIndicator,
            ]}
>
              <Text style={styles.dayName}>{day.name}</Text>
              <Text style={styles.dayDate}>{day.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 6,
    backgroundColor: Config.themeColor,
    borderRadius: 6,
  },
  dayContainer: {
    alignItems: "center",
    flexDirection: "column-reverse",
    paddingTop: 6,
    paddingBottom: 4,
    paddingHorizontal: 2,
    gap: 5,
    borderRadius: 10,
            borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
  selectedDay: {
    backgroundColor: Config.activeThemeColor,
    maxWidth:"80%",
    marginHorizontal:"auto",
        borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
  dayName: {
    color: Config.dark ? "#fff" : Config.themeColor,
    fontSize: 13,
    fontWeight: "bold",
  },
  dayDate: {
    color: Config.dark ? "#fff" : Config.themeColor,
    backgroundColor: Config.passiveThemeColor,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 90,
    fontSize: 16,
  },
  selectedDayText: {
    color: "#fff",
  },
  todayIndicator: {
    outlineWidth: 1.5,
    outlineOffset:-1,
    outlineColor: Config.activeThemeColor,
    maxWidth:"80%",
    marginHorizontal:"auto",
        borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
});

export default WeekCarrousel;
