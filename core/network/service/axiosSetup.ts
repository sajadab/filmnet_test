import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {ApiErrorHandler} from './errorHandler';

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  let axiosInstance: AxiosInstance;
  axiosInstance = axios.create(config);
  axiosInstance.defaults.params={count:40}
  ApiErrorHandler(axiosInstance);
  return axiosInstance;
};

export default initialization;
