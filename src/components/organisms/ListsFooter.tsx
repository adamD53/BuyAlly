import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FooterButton } from "../atoms/FooterButton";

const SafeView = ({ children }: { children?: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  return <View style={[styles.container, { paddingBottom: insets.bottom }]}>{children}</View>;
};

export default function ListsFooter() {
  return (
    <SafeView>
      <FooterButton title="Lists" icon="list" />
      <FooterButton title="Trash" icon="trash" />
      <FooterButton title="Settings" icon="settings" />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    width: "100%",
    backgroundColor: "#F8F8F8",
    borderTopColor: "grey",
    borderTopWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
