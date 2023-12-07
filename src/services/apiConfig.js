export const url = "https://back.lang.yourtar.ru";
export const authUrl = "https://back.yourtar.ru";

const baseURL = `${url}/api/`;
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