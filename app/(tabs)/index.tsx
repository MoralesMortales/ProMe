import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={styles.title}>My Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        marginTop:30,
    marginLeft:7,
    fontSize:23,
    },
});

