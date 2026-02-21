import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";

interface addProductProps {
  input: string;
  quantity: string;
  note: string;
  products: IProductMap[];
  setInput: (input: string) => void;
  setQuantity: (quantity: string) => void;
  setNote: (note: string) => void;
  addProduct: () => string;
  resetState: () => void;
  toggleProduct: (id: string) => void;
}

export interface IProductData {
  title: string;
  quantity: string;
  checked: boolean;
}

interface IProductMap {
  id: string;
  product: IProductData;
}

export const useProduct = create<addProductProps>((set, get) => ({
  input: "",
  quantity: "",
  note: "",
  products: [],
  setInput: (input) => set(() => ({ input: input })),
  setNote: (note) => set(() => ({ note: note })),
  setQuantity: (quantity) => set(() => ({ quantity: quantity })),
  addProduct: () => {
    const id = nanoid();
    const newProduct: IProductMap = {
      id: id,
      product: {
        title: get().input,
        quantity: get().quantity,
        checked: false,
      },
    };
    set(() => ({ products: [...get().products, newProduct] }));
    return id;
  },
  resetState: () => set(() => ({ input: "", quantity: "", note: "" })),
  toggleProduct: (id) =>
    set((state) => ({
      products: state.products.map((prod) =>
        prod.id === id
          ? {
              ...prod,
              product: { ...prod.product, checked: !prod.product.checked },
            }
          : prod,
      ),
    })),
}));
