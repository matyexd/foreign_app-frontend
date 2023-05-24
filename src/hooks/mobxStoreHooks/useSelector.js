import { useStore } from "./useStore";

export function useSelector(storeCb) {
  const store = useStore();
  if (typeof storeCb === "function") return storeCb(store);
  return store;
}
