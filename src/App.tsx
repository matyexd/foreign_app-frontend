import { RenderRoutes, ROUTES } from "./routes/routes";
import React from "react";
import { useRootStore } from "@/hooks/mobxStoreHooks/useStore";
import { useHistory } from "react-router-dom";

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = React.useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

function App() {
  const history = useHistory();
  const store = useRootStore();
  const { setHistory } = store.authStore;

  useConstructor(() => {
    setHistory(history);
  });

  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
