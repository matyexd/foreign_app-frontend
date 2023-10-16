import { makeAutoObservable, observable, action } from "mobx";
import { ROLES } from "../../../constants/Roles";

class ProfileStore {
  firstName = "Ваня";
  lastName = "Иванов";
  role = ROLES.STUDENT;
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

  setRole = (role: { code: string; name: string }) => {
    this.role = role;
  };

  setEmail = (email: string) => {
    this.email = email;
  };
}

export default ProfileStore;
