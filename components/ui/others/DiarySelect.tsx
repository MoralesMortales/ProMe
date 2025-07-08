import { StyleSheet, Text, View } from "react-native";

export function DiarySelect({ name }) {
  return <View style={styles.container}>
<Text>{name}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor:"#555"
  },
});
