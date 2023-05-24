import { makeAutoObservable, observable, action } from "mobx";
import { ROLES } from "../../../constants/Roles";

class ProfileStore {
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

  firstName = "Ваня";
  lastName = "Иванов";
  role = ROLES.STUDENT;
  email = "info@foreignapp.ru";

  setFirstName = (newFirstName) => {
    this.firstName = newFirstName;
  };

  setLastName = (newLastName) => {
    this.lastName = newLastName;
  };

  setRole = (role) => {
    this.role = role;
  };

  setEmail = (email) => {
    this.email = email;
  };
}

export default ProfileStore;
