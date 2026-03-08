import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { ModalHeader } from "../components/molecules/ModalHeader";
import { Input } from "../components/molecules/Input";
import { AddListMenu } from "../components/molecules/AddListMenu";
import { LIST_ID_LENGTH, LIST_NAME_MAX_LENGTH, useList } from "../store/storeList";
import { router } from "expo-router";
import SwitchMenu, { SwitchMenuOption } from "../components/molecules/SwitchMenu";

export default function AddListModal() {
  const { setInput, setIDInput, addList, postList, addListByID, resetState, input, idInput } = useList();
  const [mode, setMode] = useState<SwitchMenuOption>("new");

  const handleAddList = async () => {
    switch (mode) {
      case "new": {
        const id = addList();
        postList(id);
        resetState();
        router.back();
        break;
      }
      case "existing": {
        if (idInput.length === LIST_ID_LENGTH) {
          const listAdded = await addListByID();
          if (!listAdded) {
            Alert.alert("Failed to add list from given ID. Double check your ID and try again");
          }
          resetState();
          router.back();
        }
        break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <ModalHeader onSubmit={handleAddList} title="Add list" />
      <SwitchMenu
        firstOptionTitle="Create new list"
        secondOptionTitle="Add existing list"
        onChange={(opt) => setMode(opt === "new" ? "new" : "existing")}
      />
      {mode === "new" ? (
        <>
          <Input placeholder="New list" onChange={(text) => setInput(text)} value={input} maxCharLength={LIST_NAME_MAX_LENGTH} />
          <AddListMenu />
        </>
      ) : (
        <>
          <Input placeholder="Existing list id" onChange={(id) => setIDInput(id)} value={idInput} maxCharLength={LIST_ID_LENGTH} />
          <Text style={styles.errorText}>{idInput.length < 15 && `ID has to be ${LIST_ID_LENGTH} characters long`}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    gap: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});
