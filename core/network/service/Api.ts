import {defer, Observable, take} from 'rxjs';
import initializeAxios from './axiosSetup';
import {axiosRequestConfiguration} from './config';
import {map} from 'rxjs/operators';

const axiosInstance = initializeAxios(axiosRequestConfiguration);

export const get = <T>(url: string, queryParams?: object): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, { params: queryParams }))
    .pipe(map((result:any) => result.data))
    .pipe(take(1));
};


export default {get};
