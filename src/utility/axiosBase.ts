import axios from "axios";

export const axiosBase = axios.create({
    baseURL: "http://192.168.0.103:8083"
});

axiosBase.interceptors.request.use(
    (config) => {
        if (config.headers.Authorization && config.url && config.url.startsWith('/user-management')){
            delete config.headers.Authorization;
        }
        return config
    }
)
