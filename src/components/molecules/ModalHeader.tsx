import { router } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextButton } from "../atoms/TextButton";

interface IModalHeaderProps {
  title: string;
  onSubmit: () => void;
  fontColor?: string;
}

const SafeView = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  return <View style={[styles.container, { paddingTop: insets.top }]}>{children}</View>;
};

export function ModalHeader({ onSubmit, title, fontColor }: IModalHeaderProps) {
  return (
    <SafeView>
      <View style={{ ...styles.textButtons }}>
        <TextButton onPress={() => router.back()} title="Cancel" color={fontColor} />
        <TextButton onPress={onSubmit} title="Done" color={fontColor} />
      </View>
      <Text style={{ ...styles.headerText, color: fontColor ? fontColor : "#111111" }}>
        {title}
      </Text>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    gap: 25,
  },

  textButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
  },
});
