import { createContext, use } from "react";
import { StoreType } from "../types";

const StoreContext = createContext<StoreType | null>(null);

const Provider = StoreContext.Provider;
const useStore = (selector: (store: StoreType[0]) => any) => {
  const [store, setStore] = use(StoreContext)!;

  const set = (value: Record<string, any>) => {
    setStore({ ...store, ...value });
  };

  return [selector(store), set];
};

export { Provider, useStore };
