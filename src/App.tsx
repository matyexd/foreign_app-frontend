import { RenderRoutes, ROUTES } from "./routes/routes";
import React, { useEffect } from "react";
import { useRootStore } from "@/hooks/mobxStoreHooks/useStore";
import { useHistory } from "react-router-dom";
import { ROLES_ITEMS } from "./constants/Roles";
import { RolesService } from "./services/RolesService";
import { TokenService } from "./services/TokenService";
import { observer } from "mobx-react";

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = React.useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

const App = observer(() => {
  const history = useHistory();
  const store = useRootStore();
  const { setHistory, isAuth } = store.authStore;
  const { setRole } = store.profileStore;

  useEffect(() => {
    console.log(123);
    if (RolesService.checkRoleInRoles(ROLES_ITEMS.TEACHER))
      setRole(ROLES_ITEMS.TEACHER);
    else setRole(ROLES_ITEMS.STUDENT);
  }, [isAuth]);

  useConstructor(() => {
    setHistory(history);
  });

  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
});

export default App;
