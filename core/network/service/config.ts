import {AxiosRequestConfig} from 'axios';

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  responseType: 'json',
};
