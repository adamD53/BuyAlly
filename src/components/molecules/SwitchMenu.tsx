import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type SwitchMenuOption = "new" | "existing";

interface SwitchMenuProps {
  onChange?: (selected: SwitchMenuOption) => void;
  firstOptionTitle: string;
  secondOptionTitle: string;
}

export default function SwitchMenu({
  onChange,
  firstOptionTitle,
  secondOptionTitle,
}: SwitchMenuProps) {
  const [selected, setSelected] = useState<SwitchMenuOption>("new");

  const handlePress = (option: SwitchMenuOption) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, selected === "new" && styles.optionActive]}
        onPress={() => handlePress("new")}
        activeOpacity={0.8}
      >
        <Text style={[styles.label, selected === "new" && styles.labelActive]}>
          {firstOptionTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selected === "existing" && styles.optionActive]}
        onPress={() => handlePress("existing")}
        activeOpacity={0.8}
      >
        <Text style={[styles.label, selected === "existing" && styles.labelActive]}>
          {secondOptionTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4B4EDE",
    overflow: "hidden",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  option: {
    flex: 1,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  optionActive: {
    backgroundColor: "#4B4EDE",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4B4EDE",
  },
  labelActive: {
    color: "#fff",
  },
});
