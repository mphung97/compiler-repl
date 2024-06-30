import { createContext, use, useState } from "react";

function useStoreData() {
  const store = useState({
    city: "",
    arrival: "",
    departure: "",
  });
  return store;
}

type UseStoreReturnType = ReturnType<typeof useStoreData>;

const StoreContext = createContext<UseStoreReturnType | null>(null);

const Provider = StoreContext.Provider;
const useStore = (selector: (store: UseStoreReturnType[0]) => any) => {
  const [store, setStore] = use(StoreContext)!;

  const set = (value: Record<string, any>) => {
    setStore({ ...store, ...value });
  };

  return [selector(store), set];
};

export { Provider, useStore };
