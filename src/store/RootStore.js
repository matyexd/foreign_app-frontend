import LayoutStore from "../components/Layout/store/LayoutStore";

class ForeignAppStore {
  constructor() {
    this.layoutStore = new LayoutStore();
  }
}

export default ForeignAppStore;
