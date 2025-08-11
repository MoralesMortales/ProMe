import { Config } from "@/constants/config";
import { icons } from "@/constants/icons";
import { useState } from "react";
import { Modal, Pressable, View, Text, StyleSheet, Image } from "react-native";
const OPTIONS = ["Higiene", "Cocina", "Trabajo", "Ejercicio"];

export default function ChooseList() {
  const [selected, setSelected] = useState<string>("");
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.choose_list_container}>
      <View style={styles.choose_list_line}>
        <Text>Assign Tag</Text>

        <Pressable
          style={styles.dropdown_trigger}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.text_arrow_image}>{selected || "Select..."}</Text>
          <Image source={icons.DropArrow} style={styles.arrow_image} />
        </Pressable>

        <Modal visible={visible} transparent animationType="fade">
          <Pressable style={styles.modal_bg} onPress={() => setVisible(false)}>
            <View style={styles.dropdown_list}>
              {OPTIONS.map((option) => (
                <Pressable
                  key={option}
                  style={styles.dropdown_item}
                  onPress={() => {
                    setSelected(option);
                    setVisible(false);
                  }}
                >
                  <Text>{option}</Text>
                </Pressable>
              ))}
            </View>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  choose_list_container: {
    marginTop: 30,
    gap: 45,
  },

  choose_list_line: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 90,
  },

  text_arrow_image: {
  },

  arrow_image: {
    width:30,
    objectFit:"contain",
        position:"absolute",
    bottom:2,
    right:-9

  },

  dropdown_trigger: {
    position:"relative",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:14,
    paddingVertical:2,
backgroundColor:Config.darkMode ? "#eee" : "#000",
  },

  modal_bg: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  dropdown_list: {
    margin: 20,
    backgroundColor: Config.themeConfig.secondaryColor,
    borderRadius: 8,
    padding: 10,
  },
  dropdown_item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
