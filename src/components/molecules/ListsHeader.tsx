import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { TextButton } from "../atoms/TextButton";

const SafeView = ({ children }: any) => {
  const insets = useSafeAreaInsets();
  return <View style={[styles.container, { paddingTop: insets.top + 30 }]}>{children}</View>
}

export function ListsHeader() {
  return (
    <SafeView>
      <Text style={styles.headerText}>Lists</Text>
      <TextButton onPress={() => router.navigate("/addList")} title="Add list" />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 30
  },

  headerText: {
    color: "#111111",
    fontSize: 30,
    fontWeight: "bold",
  },

  addText: {
    color: "blue",
  }
})
