import LayoutStore from "../components/Layout/store/LayoutStore";
import ProfileStore from "../views/profile/store/ProfileStore";
import AuthStore from "../views/auth/store/AuthStore";

class ForeignAppStore {
  constructor() {
    this.layoutStore = new LayoutStore();
    this.profileStore = new ProfileStore();
    this.authStore = new AuthStore();
  }
}

export default ForeignAppStore;
