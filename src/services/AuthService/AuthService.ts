import { Api } from "../apiService";
import { AuthUrl } from "../../routes/routes-enums";
import { authConfig } from "../apiConfig";
import { PostGetCodeData, PostLoginData } from "@/services/AuthService/types";

const authInstance = new Api(authConfig);

class AuthService {
  static postGetCode = async (payload: { phone: string; project: string }) => {
    return await authInstance.post<PostGetCodeData>(
      AuthUrl.postGetCode,
      payload
    );
  };

  static postLogin = async (payload: {
    phone: string;
    project: string;
    code: string;
  }) => {
    return await authInstance.post<PostLoginData>(AuthUrl.postLogin, payload);
  };
}

export default AuthService;
