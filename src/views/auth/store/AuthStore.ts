import { makeAutoObservable, observable, action } from "mobx";
import { ROLES } from "../../../constants/Roles";
import AuthService from "../../../services/AuthService/AuthService";

class AuthStore {
  phoneNumber = "";
  inProcess = false;
  errors = "";

  constructor() {
    makeAutoObservable(
      this,
      {
        phoneNumber: observable,
        inProcess: observable,
      },
      { autoBind: true }
    );
  }

  setInProcess = (value = false) => {
    this.inProcess = value;
  };

  setErrors = (message = "") => {
    this.errors = message;
  };

  setPhoneNumber = (value: string) => {
    this.phoneNumber = value;
  };

  postGetCode = async ({ phoneValue }: { phoneValue: string }) => {
    const payload = {
      phone: phoneValue,
      project: "adminka", // оставляем пока так
    };

    this.setInProcess(true);
    this.setErrors();
    // await new Promise(function(resolve, reject) {
    //     setTimeout(function() { resolve(); }, 3000);
    // })

    try {
      const { data } = await AuthService.postGetCode(payload);
      console.log(data);
    } catch (e) {
      console.log(e);

      this.setErrors("Неверно указан номер");
    }

    this.setInProcess();
  };
}

export default AuthStore;
