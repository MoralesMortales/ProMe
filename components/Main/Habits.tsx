import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { icons } from "@/constants/icons";

export const Habit = () => {
  const [isHolding, setIsHolding] = useState(false);
  let holdTimer = null; // Referencia al temporizador

  const startHold = () => {
    setIsHolding(false);
    holdTimer = setTimeout(() => {
      setIsHolding(true);
    }, 5000);
  };

  const endHold = () => {
    clearTimeout(holdTimer);
    if (isHolding) {
      Alert.alert("¡Soltado después de 5 segundos!");
    }
    setIsHolding(false);
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPressIn={startHold}
        onPressOut={endHold}
        style={styles.container}
      >
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.leftIcon}
        ></Image>
        <Text style={ styles.title }>
          Cocinar
        </Text>
        <Text style={ styles.title }>
          8:30 AM
        </Text>
        <Image source={icons.Plus}></Image>

      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20, 
    backgroundColor: "#eee",
    borderRadius: 8, 
  },
  leftIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain", 
    marginRight: 10, 
  },
  title: {
    flex: 1, 
    fontSize: 16,
    color: "#000",
  },
});
