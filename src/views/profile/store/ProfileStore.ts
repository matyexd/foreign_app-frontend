import { makeAutoObservable, observable, action } from "mobx";
import { ROLES, ROLES_ITEMS, RolesItemTypes } from "../../../constants/Roles";

class ProfileStore {
  firstName = "Ваня";
  lastName = "Иванов";
  role: RolesItemTypes = ROLES_ITEMS.STUDENT;
  email = "info@foreignapp.ru";

  constructor() {
    makeAutoObservable(
      this,
      {
        firstName: observable,
        lastName: observable,
        role: observable,
        email: observable,

        setFirstName: action,
        setLastName: action,
        setRole: action,
        setEmail: observable,
      },
      { autoBind: true }
    );
  }

  setFirstName = (newFirstName: string) => {
    this.firstName = newFirstName;
  };

  setLastName = (newLastName: string) => {
    this.lastName = newLastName;
  };

  setRole = (role: RolesItemTypes) => {
    this.role = role;
  };

  setEmail = (email: string) => {
    this.email = email;
  };
}

export default ProfileStore;
