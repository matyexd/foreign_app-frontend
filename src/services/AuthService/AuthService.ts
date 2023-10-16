import { Api } from "../apiService";
import { AuthUrl } from "../../routes/routes-enums";
import { authConfig } from "../apiConfig";
import { PostGetCodeData } from "@/services/AuthService/types";

const authInstance = new Api(authConfig);

class AuthService {
  static postGetCode = async (payload: { phone: string; project: string }) => {
    return await authInstance.post<PostGetCodeData>(
      AuthUrl.postGetCode,
      payload
    );
  };
}

export default AuthService;
