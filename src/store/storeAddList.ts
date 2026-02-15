import { create } from "zustand";
import "react-native-get-random-values";
import { nanoid } from "nanoid/non-secure";

interface inputProps {
  input: string,
  color: string,
  icon: string,
  lists: IListData[],
  id: string,
  setInput: (input: string) => void,
  setColor: (color: string) => void,
  setIcon: (icon: string) => void,
  addTask: () => void
  resetState: () => void
}

export interface IListData {
  title: string,
  icon: any,
  color: string,
  id: string
}

export const useAddList = create<inputProps>((set, get) => ({
  input: "",
  color: "grey", // default color value
  icon: "disabled-by-default", // default icon
  lists: [],
  id: "0",
  setInput: (input) => set(() => ({ input: input })),
  setColor: (color) => set(() => ({ color: color })),
  setIcon: (icon) => set(() => ({ icon: icon })),
  addTask: () => {
    const newList = { title: get().input, icon: get().icon, color: get().color, id: nanoid()};
    set(() => ({ lists: [...get().lists, newList] }));
  }, 
  resetState: () => set(() => ({input: "", color: "grey", icon: "disabled-by-default"}))
}))
