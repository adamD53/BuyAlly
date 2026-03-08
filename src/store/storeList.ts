import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";
import { MaterialIconType } from "../components/molecules/MenuGrid";
import { collection, updateDoc, arrayRemove, doc, getDocs, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";

export const LIST_ID_LENGTH = 15;
export const LIST_NAME_MAX_LENGTH = 10;

interface addListProps {
  input: string;
  idInput: string;
  color: string;
  icon: MaterialIconType;
  lists: IListData[];
  setInput: (input: string) => void;
  setIDInput: (input: string) => void;
  setColor: (color: string) => void;
  setIcon: (icon: MaterialIconType) => void;
  addList: () => string;
  addListByID: () => Promise<boolean>;
  deleteList: (listID: string) => Promise<void>;
  postList: (listID: string) => Promise<void>;
  fetchLists: () => Promise<void>;
  addProductToList: (listID: string | string[], productID: string) => void;
  resetState: () => void;
  cleanLists: () => void;
}

export interface IListData {
  title: string;
  icon: MaterialIconType;
  color: string;
  id: string;
  ownersIDs: (string | undefined)[];
  productIDs: string[];
}

export const useList = create<addListProps>((set, get) => ({
  input: "",
  idInput: "",
  color: "grey", // default color value
  icon: "disabled-by-default", // default icon
  lists: [],
  setInput: (input) => set(() => ({ input: input })),
  setIDInput: (id) => set(() => ({ idInput: id })),
  setColor: (color) => set(() => ({ color: color })),
  setIcon: (icon) => set(() => ({ icon: icon })),
  addList: () => {
    const newId = nanoid(LIST_ID_LENGTH);
    const newList: IListData = {
      title: get().input,
      icon: get().icon,
      color: get().color,
      productIDs: [],
      id: newId,
      ownersIDs: [auth.currentUser?.uid],
    };

    set(() => ({ lists: [...get().lists, newList] }));

    return newId;
  },
  addListByID: async () => {
    try {
      const listID = get().idInput;
      const docRef = doc(db, "lists", listID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const newList: IListData = {
          title: data.title,
          icon: data.icon,
          color: data.color,
          productIDs: data.productIDs,
          id: listID,
          ownersIDs: [...data.ownersIDs, auth.currentUser?.uid],
        };

        await setDoc(docRef, {
          title: data.title,
          icon: data.icon,
          color: data.color,
          productIDs: data.productIDs,
          ownersIDs: newList.ownersIDs,
        });

        set(() => ({ lists: [...get().lists, newList] }));

        return true;
      } else {
        return false;
      }
    } catch (err: unknown) {
      console.error(`Error with firebase while adding list by ID: ${err}`);
      return false;
    }
  },
  deleteList: async (listID) => {
    try {
      const docRef = doc(db, "lists", listID);
      await updateDoc(docRef, {
        ownersIDs: arrayRemove(auth.currentUser?.uid),
      });

      set((state) => ({
        lists: state.lists.filter((list) => list.id !== listID),
      }));

      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const owners: string[] = data.ownersIDs;
        if (owners.length === 0 || owners == undefined) {
          deleteDoc(docRef);
        }
      }
    } catch (err: unknown) {
      console.error(`Error with firebase while deleting list: ${err}`);
    }
  },
  addProductToList: (listID, productID) =>
    set((state) => ({
      lists: state.lists.map((list) => (list.id === listID ? { ...list, productIDs: [...list.productIDs, productID] } : list)),
    })),
  resetState: () => set(() => ({ input: "", idInput: "", color: "grey", icon: "disabled-by-default" })),
  postList: async (listID) => {
    try {
      const currentList = get().lists.find((list) => list.id == listID);
      const newDocRef = doc(db, "lists", listID);

      await setDoc(newDocRef, {
        color: currentList?.color,
        icon: currentList?.icon,
        productIDs: currentList?.productIDs,
        title: currentList?.title,
        ownersIDs: currentList?.ownersIDs,
      });
    } catch (err: unknown) {
      console.error(`Error with firebase while creating a list document. ${err}`);
    }
  },
  fetchLists: async () => {
    try {
      const docSnap = await getDocs(collection(db, "lists"));
      docSnap.forEach((doc) => {
        const currentListData = doc.data();
        const newList: IListData = {
          title: currentListData.title,
          icon: currentListData.icon,
          color: currentListData.color,
          id: doc.id,
          ownersIDs: currentListData.ownersIDs,
          productIDs: currentListData.productIDs,
        };

        set(() => ({ lists: [...get().lists, newList] }));
      });
    } catch (err: unknown) {
      console.error(`Error with firebase while retrieving data from firestore. ${err}`);
    }
  },
  cleanLists: () => set(() => ({ lists: [] })),
}));
