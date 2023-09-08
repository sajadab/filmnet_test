import {AxiosInstance} from "axios";

export function ApiErrorHandler(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.log("error status="+error.response?.status)
            return Promise.reject(error);
        }
    );
}