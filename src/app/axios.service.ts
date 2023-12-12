import { Injectable } from '@angular/core';
import axios, {Method} from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = "https://2925-51-39-65-71.ngrok-free.app";
    // axios.defaults.headers.post["Content-type"] = "application/json";
    axios.defaults.headers.post["Content-type"] = "text/plain";
    axios.defaults.headers.put["Content-type"] = "text/plain";
    axios.defaults.headers.patch["Content-type"] = "text/plain";
    axios.defaults.headers.delete["Content-type"] = "text/plain";
  }

  request(method: Method, url: string, data: any): Promise<any>{

    return axios({
      method: method,
      url: url,
      data: data
    });

  }
}
