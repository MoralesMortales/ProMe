import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { DiarySelect } from "@/components/ui/others/DiarySelect";

export default function Diary() {
  return (
    <View>
      <StatusBar />
      <View style={styles.baseHeader}>
        <Image source={require('../../../assets/images/settings.png')} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>My Diaries</Text>
        <View><DiarySelect name={"holo"}/></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseHeader: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  container: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  title:{
fontSize:18,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
