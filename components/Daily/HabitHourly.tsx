import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "@/constants/icons";
import { Config } from "@/constants/config";

export const HabitHourly = () => {
  const [isHolding, setIsHolding] = useState(false);
  let [state, setState] = useState(false);
  let holdTimer = null;

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

  const check = () => {
    setState(!state);
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
        />

        <Text style={styles.title} numberOfLines={1}>
          Cocinar Comida
        </Text>
        <Text style={styles.complement}>8:00 AM</Text>

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              check();
            }}
            style={[!state && styles.notCheck]}
          >
            <Image source={icons.Check} tintColor={Config.themeColor} />
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
  },
  leftIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    borderRadius: 90,
    marginRight: 10,
  },
  notCheck: {
    opacity: 0.3,
  },
  title: {
    fontSize: 16,
    color: "#000",
    width: "45%",
    textOverflow: "Ellipsis",
  },
  complement: {
    width: "20%",
    fontSize: 13,
    color: "#000",
    textAlign: "center",
  },
  icons: {
    flexDirection: "row",
    width: "20%",
    justifyContent:"center",
    alignItems:"center"
  },
});
