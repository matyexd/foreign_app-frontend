export const url = "http://localhost:8080";
export const authUrl = "https://back.yourtar.ru";

const baseURL = `${url}/api/v1`;
const baseAuthURL = `${authUrl}/api`;

const baseConfig = {
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
};

const authConfig = {
    baseURL: baseAuthURL,
    headers: {
        "Content-Type": "application/json",
    },
};

export { baseConfig, baseURL, authConfig };