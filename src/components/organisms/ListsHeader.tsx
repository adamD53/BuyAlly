import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SafeView = ({ children }: any) => {
  const insets = useSafeAreaInsets();

  return <View style={ [styles.container, { paddingTop: insets.top + 30}]}>{ children }</View>
}

export function ListsHeader () {
  const router = useRouter();

  return (
    <SafeView>
      <Text style={styles.headerText}>Lists</Text>
      <Text style={styles.addText} onPress={() => router.navigate("/addList")}>Add List</Text>
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
    cursor: "pointer"
  }
})
