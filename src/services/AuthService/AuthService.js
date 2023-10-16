import { Api } from "../apiService";
import { AuthUrl } from "../../routes/routes-enums";
import { authConfig } from "../apiConfig";

const authInstance = new Api(authConfig);

class AuthService {
    static postGetCode = async (payload) => {
        return await authInstance.post(AuthUrl.postGetCode, payload);
    };
}

export default AuthService;