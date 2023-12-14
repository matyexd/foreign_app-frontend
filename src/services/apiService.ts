import axiosLib from "axios";
import { errors } from "../constants";
import { keysToCamel } from "../helpers";
import { TokenService } from "./TokenService";

class Api {
  service;

  constructor(config: any) {
    let service = axiosLib.create(config);
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    service.interceptors.request.use(
      (config) => {
        const token = TokenService.getToken();
        if (config.auth) {
          return config;
        }
        if (!config.headers.Authorization && token) {
          config.headers.Authorization = `${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );
    this.service = service;
  }

  handleSuccess(response: any) {
    return response;
  }

  async handleError(error: any) {
    if (axiosLib.isCancel(error)) return Promise.reject(errors.cancelToken);

    return Promise.reject(keysToCamel(error));
  }

  async post<T>(
    url: string,
    body: any,
    config?: any
  ): Promise<{ data: T; headers: any }> {
    const { data, headers } = await this.service.post<T>(url, body, config);
    return { data: data, headers };
  }

  async get(url: string, query: any, config: any) {
    const newConfig = {
      params: query,
      ...config,
    };
    const { data, headers } = await this.service.get(url, newConfig);
    return { data: keysToCamel(data), headers };
  }

  async delete<T>(url: string, body:any, config?: any): Promise<{ data: T; headers: any }> {
    const { data, headers } = await this.service.delete<T>(url, {data: body, ...config});
    return { data: data, headers };
  }
}

export { Api };
