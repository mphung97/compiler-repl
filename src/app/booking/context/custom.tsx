import {
  useRef,
  createContext as createContextOrg,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";
import { ExternalStoreType, FieldsType } from "../types";

function useStoreData(initialState: FieldsType): ExternalStoreType {
  const store = useRef(initialState);

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Partial<FieldsType>) => {
    store.current = { ...store.current, ...value };
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  const storeInstance: ExternalStoreType = { get, set, subscribe };

  return storeInstance;
}

const StoreContext = createContextOrg<ExternalStoreType | null>(null);
const Provider = StoreContext.Provider;

function useStore<SelectorOutput>(
  selector: (store: FieldsType) => SelectorOutput,
): [SelectorOutput, (value: Partial<FieldsType>) => void] {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Store not found");
  }

  const state = useSyncExternalStore(
    store.subscribe,
    () => selector(store.get()),
    () => selector({
      city: "",
      arrival: "",
      departure: "",
    }),
  );

  return [state, store.set];
}

export {
  Provider,
  useStore,
  useStoreData
};