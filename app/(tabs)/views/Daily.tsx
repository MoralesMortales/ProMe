import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Daily() {
  return (
    <View>
      <StatusBar/>
      <View style={styles.baseHeader}>
              <Text>Holua Dayli</Text>
      </View>
      <View>
              <Text>Holua Dayli</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseHeader: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 24,
    backgroundColor: '#e3e',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
