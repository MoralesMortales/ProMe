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

export const HabitQuantity = () => {
  const [isHolding, setIsHolding] = useState(false);
  let [quantity, setQuantity] = useState(0);
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

const setQuantityFnt = (type) => {
    switch (type) {
      case "+":
       setQuantity(quantity + 1); 
        break;

        case "-":
        if (quantity > 0) {
               setQuantity(quantity - 1); 
        }
      break
    }
  }

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
        <Text style={styles.complement}>{quantity}</Text>

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              setQuantityFnt("-");
            }}
            style={quantity === 0 && styles.notAvailableBtn}
          >
            <Image source={icons.Minus} tintColor={Config.themeColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              setQuantityFnt("+");
            }}
>
            <Image source={icons.Plus} tintColor={Config.themeColor} />
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
  notAvailableBtn:{
   opacity:0.3 
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
  },
});
