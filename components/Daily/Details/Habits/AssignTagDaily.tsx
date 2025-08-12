import { Config } from "@/constants/config";
import { icons } from "@/constants/icons";
import { T_addTag, T_getAllTags } from "@/database/actions";
import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

export default function AssignTagDaily() {
  const [selected, setSelected] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [newTagName, setNewTagName] = useState("");

  useEffect(() => {
    const loadTags = async () => {
      const dbTags = await T_getAllTags();
      setOptions(dbTags.map((tag) => tag.name));
    };
    loadTags();
  }, []);

  const handleAddTag = async () => {
    if (newTagName.trim()) {
      try {
        await T_addTag(newTagName);
        const updatedTags = [...options, newTagName];
        setOptions(updatedTags);
        setSelected(newTagName);
        setNewTagName("");
      } catch (error) {
        alert(error.message);
      } finally {
        setVisible(false);
      }
    }
  };

  return (
    <View style={styles.choose_list_container}>
      <View style={styles.choose_list_line}>
        <Text style={styles.label}>Assign Tag</Text>

        <Pressable
          style={styles.dropdown_trigger}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.text_arrow_image}>{selected || "Select..."}</Text>
          <Image
            source={icons.DropArrow}
            style={[
              styles.arrow_image,
              { tintColor: Config.darkMode ? "#000" : "#fff" },
            ]}
          />
        </Pressable>

        <Modal visible={visible} transparent animationType="fade">
          <Pressable style={styles.modal_bg} onPress={() => setVisible(false)}>
            <View style={styles.dropdown_list}>
              {options.map((option) => (
                <Pressable
                  key={option}
                  style={styles.dropdown_item}
                  onPress={() => {
                    setSelected(option);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.option_text}>{option}</Text>
                </Pressable>
              ))}

              <View style={styles.new_tag_container}>
                <TextInput
                  style={styles.new_tag_input}
                  placeholder="New tag name"
                  placeholderTextColor={Config.darkMode ? "#000" : "#eee"}
                  value={newTagName}
                  onChangeText={setNewTagName}
                />
                <Pressable style={styles.add_button} onPress={handleAddTag}>
                  <Text style={styles.add_button_text}>+</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Config.darkMode ? "#eee" : "#000",
        width:"30%",
    textAlign:"center"

  },

  dropdown_item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Config.themeConfig.secondaryColor_2,
  },

  option_text: {
    color: Config.darkMode ? "#000" : "#eee",
  },

  new_tag_container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },

  new_tag_input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Config.themeConfig.secondaryColor_2,
    borderRadius: 5,
    padding: 8,
    color: Config.themeConfig.primaryTextColor,
    backgroundColor: Config.themeConfig.secondaryColor,
  },

  add_button: {
    marginLeft: 10,
    backgroundColor: Config.themeConfig.primaryColor,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  add_button_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  choose_list_container: {
    marginTop: 30,
    gap: 45,
  },
  choose_list_line: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  text_arrow_image: {},

  arrow_image: {
    width: 30,
    objectFit: "contain",
    position: "absolute",
    bottom: 2,
    right: -9,
  },

  dropdown_trigger: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 2,
    backgroundColor: Config.darkMode ? "#eee" : "#000",
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
});
