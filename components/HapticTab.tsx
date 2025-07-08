import { Pressable } from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <Pressable
      {...props}
      // 👇 Desactiva el efecto visual en iOS/Android
      android_ripple={null}  // Elimina el ripple en Android
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 }, // Opcional: Efecto sutil al presionar
        props.style,
      ]}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); // Solo feedback háptico
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
