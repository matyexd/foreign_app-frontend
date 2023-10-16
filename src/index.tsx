import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { AppFonts } from "./utils/AppFonts";
import { appTheme } from "./constants/appTheme";
import { Provider } from "mobx-react";
import ForeignAppStore from "./store/RootStore";
import { RootStoreProvider } from "@/hooks/mobxStoreHooks/useStore";

export const rootStore = new ForeignAppStore();

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <RootStoreProvider>
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={appTheme}>
        <App />
        <AppFonts />
      </MantineProvider>
    </BrowserRouter>
  </RootStoreProvider>
);
