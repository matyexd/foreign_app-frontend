import axiosLib from "axios";
import { errors } from "../constants";
import { keysToCamel } from "../helpers";
import { TokenService } from "./TokenService";

class Api {
    service;

    constructor(config) {
        let service = axiosLib.create(config);
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        service.interceptors.request.use(
            (config) => {
                const token = TokenService.getToken();
                if (config.isAuth === false) {
                    return config;
                }
                if (!config.headers.Authorization && token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );
        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    async handleError(error) {
        if (axiosLib.isCancel(error)) return Promise.reject(errors.cancelToken);

        return Promise.reject(keysToCamel(error));
    }

    async post(url, body, config) {
        const { data, headers } = await this.service.post(url, body, config);
        return { data: keysToCamel(data), headers };
    }

    async get(url, query, config) {
        const newConfig = {
            params: query,
            ...config,
        };
        const { data, headers } = await this.service.get(url, newConfig);
        return { data: keysToCamel(data), headers };
    }
}

export { Api };