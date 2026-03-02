import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";
import { doc, setDoc, updateDoc, arrayUnion, getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";

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
  postProduct: (productID: string, listID: string | string[]) => Promise<void>;
  fetchProducts: () => Promise<void>;
  cleanProducts: () => void;
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
  postProduct: async (productID, listID) => {
    try {
      const currentProduct = get().products.find((product) => product.id == productID);
      const productDocRef = doc(db, "products", productID);
      const listDocRef = doc(db, "lists", listID.toString());

      await updateDoc(listDocRef, {
        productIDs: arrayUnion(productID),
      });

      await setDoc(productDocRef, {
        title: currentProduct?.product.title,
        quantity: currentProduct?.product.quantity,
        checked: currentProduct?.product.checked,
      });
    } catch (err: unknown) {
      console.error(`Error with creating a product document: ${err}`);
    }
  },
  fetchProducts: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));

      querySnapshot.forEach((doc) => {
        const currentProductData = doc.data();
        const newProduct: IProductData = {
          title: currentProductData.title,
          quantity: currentProductData.quantity,
          checked: currentProductData.checked,
        };

        set(() => ({ products: [...get().products, { id: doc.id, product: newProduct }] }));
      });
    } catch (err: unknown) {
      console.error(`Error with retrieving data from firestore. ${err}`);
    }
  },
  cleanProducts: () => set(() => ({ products: [] })),
}));
