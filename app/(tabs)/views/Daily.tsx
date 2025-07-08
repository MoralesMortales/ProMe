import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Daily() {
  return (
    <View>
      <StatusBar />
      <View style={styles.baseHeader}>
        <Image source={require('../../../assets/images/settings.png')}/>
      </View>
      <View>
        <Text>Holua Dayli</Text>
        <Text>Holua Dayli</Text>
        <Text>Holua Dayli</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseHeader: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight:10,
    marginTop:10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
