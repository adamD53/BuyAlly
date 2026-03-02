import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";
import { MaterialIconType } from "../components/molecules/MenuGrid";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";

interface addListProps {
  input: string;
  color: string;
  icon: MaterialIconType;
  lists: IListData[];
  setInput: (input: string) => void;
  setColor: (color: string) => void;
  setIcon: (icon: MaterialIconType) => void;
  addList: () => string;
  postList: (listID: string) => Promise<void>;
  fetchLists: () => Promise<void>;
  addProductToList: (listID: string | string[], productID: string) => void;
  resetState: () => void;
  cleanLists: () => void;
}

interface IListData {
  title: string;
  icon: MaterialIconType;
  color: string;
  id: string;
  ownerID: string | undefined;
  productIDs: string[];
}

export const useList = create<addListProps>((set, get) => ({
  input: "",
  color: "grey", // default color value
  icon: "disabled-by-default", // default icon
  lists: [],
  setInput: (input) => set(() => ({ input: input })),
  setColor: (color) => set(() => ({ color: color })),
  setIcon: (icon) => set(() => ({ icon: icon })),
  addList: () => {
    const newId = nanoid();
    const newList = {
      title: get().input,
      icon: get().icon,
      color: get().color,
      productIDs: [],
      id: newId,
      ownerID: auth.currentUser?.uid,
    };
    set(() => ({ lists: [...get().lists, newList] }));
    return newId;
  },
  addProductToList: (listID, productID) => {
    set((state) => ({
      lists: state.lists.map((list) => (list.id === listID ? { ...list, productIDs: [...list.productIDs, productID] } : list)),
    }));
  },
  resetState: () => set(() => ({ input: "", color: "grey", icon: "disabled-by-default" })),
  postList: async (listID) => {
    try {
      const currentList = get().lists.find((list) => list.id == listID);
      const newDocRef = doc(db, "lists", listID);

      await setDoc(newDocRef, {
        color: currentList?.color,
        icon: currentList?.icon,
        productIDs: currentList?.productIDs,
        title: currentList?.title,
        ownerID: currentList?.ownerID,
      });
    } catch (err: unknown) {
      console.error(`Error with creating a list document. ${err}`);
    }
  },
  fetchLists: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "lists"));

      querySnapshot.forEach((doc) => {
        const currentListData = doc.data();
        const newList: IListData = {
          title: currentListData.title,
          icon: currentListData.icon,
          color: currentListData.color,
          id: doc.id,
          ownerID: currentListData.ownerID,
          productIDs: currentListData.productIDs,
        };

        set(() => ({ lists: [...get().lists, newList] }));
      });
    } catch (err: unknown) {
      console.error(`Error with retrieving data from firestore. ${err}`);
    }
  },
  cleanLists: () => set(() => ({ lists: [] })),
}));
