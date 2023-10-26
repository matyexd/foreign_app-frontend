import { makeObservable, observable, action } from "mobx";

class LayoutStore {
  constructor() {
    makeObservable(this, {
      sidebarOpen: observable,
      setSidebarOpen: action,
    });
  }

  sidebarOpen = true;

  setSidebarOpen = () => {
    this.sidebarOpen = !this.sidebarOpen;
  };
}

export default LayoutStore;
