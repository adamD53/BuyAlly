import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeView = ({ children }: any) => {
  const insets = useSafeAreaInsets();

  return <View style={ [styles.container, { paddingBottom: insets.bottom}]}>{ children }</View>
}

export function ListsFooter () {
  return (
    <SafeView>
      <Text>This is footer text</Text> 
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: "100%",
    backgroundColor: "#F8F8F8",
    borderTopColor: "grey",
    borderTopWidth: .5
  }
})