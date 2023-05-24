import LayoutStore from "../components/Layout/store/LayoutStore";
import ProfileStore from "../views/profile/store/ProfileStore";

class ForeignAppStore {
  constructor() {
    this.layoutStore = new LayoutStore();
    this.profileStore = new ProfileStore();
  }
}

export default ForeignAppStore;
