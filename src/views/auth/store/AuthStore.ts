import { makeAutoObservable, observable, action } from "mobx";
import { ROLES } from "../../../constants/Roles";
import AuthService from "../../../services/AuthService/AuthService";
import { TokenService } from "@/services/TokenService";
import { AppPath } from "@/routes/routes-enums";

class AuthStore {
  history: any = {};
  phoneNumber = "";
  inProcess = false;
  errors = "";
  code = "";

  constructor() {
    makeAutoObservable(
      this,
      {
        phoneNumber: observable,
        inProcess: observable,
        code: observable,
        history: observable,
      },
      { autoBind: true }
    );
  }

  setHistory = (history: any) => {
    this.history = history;
  };

  setInProcess = (value = false) => {
    this.inProcess = value;
  };

  setErrors = (message = "") => {
    this.errors = message;
  };

  setPhoneNumber = (value: string = "") => {
    this.phoneNumber = value;
  };

  setCode = (value: string = "") => {
    this.code = value;
  };

  login = async () => {
    this.history.push(AppPath.communityCourses);
  };

  setTokens = ({ accessToken }: { accessToken: string }) => {
    TokenService.setToken(accessToken);
    // this.rootStore.userStore.mergeUserData(jwtDecode(accessToken));
  };

  appendToken = async (data: { token: string }) => {
    try {
      TokenService.setStorage();
      this.setTokens({
        accessToken: data.token,
      });

      await this.login();

      //await this.checkForAdminPlan(data.accessToken)
    } catch (e) {}
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
      this.setCode(data.data.code);
      this.setPhoneNumber(phoneValue);
    } catch (e) {
      console.log(e);
      this.setCode();
      this.setErrors("Неверно указан номер");
    }

    this.setInProcess();
  };

  postLogin = async ({ code }: { code: string }) => {
    const payload = {
      phone: this.phoneNumber,
      project: "adminka", // оставляем пока так
      code: code,
    };

    this.setInProcess(true);
    this.setErrors();
    // await new Promise(function(resolve, reject) {
    //     setTimeout(function() { resolve(); }, 3000);
    // })

    try {
      const { data } = await AuthService.postLogin(payload);
      await this.appendToken({ token: data.data.token });
      this.setCode();
      this.setPhoneNumber();
    } catch (e) {
      console.log(e);
      this.setErrors("Неверно указан номер");
    }

    this.setInProcess();
  };

  logout = () => {
    TokenService.removeToken();
    this.history.push(AppPath.signIn);
  };
}

export default AuthStore;
