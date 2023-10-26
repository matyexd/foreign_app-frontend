import { createContext, ReactNode, useContext } from "react";
import ForeignAppStore from "@/store/RootStore";

let store: ForeignAppStore;

// create the context
const StoreContext = createContext<ForeignAppStore | undefined>(undefined);

// create the provider component
export function RootStoreProvider({ children }: { children: ReactNode }) {
  //only create the store once ( store is a singleton)
  const root = store ?? new ForeignAppStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

// create the hook
export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}
