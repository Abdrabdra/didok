import { AxiosResponse } from "axios";
import axios from "axios";
import { $api, DEV_API } from "../../api";

export class AuthService {
  static async login(creds) {
    return $api.post(`auth/login`, creds);
  }

  static async refresh() {
    return axios.get(`${DEV_API}auth/refresh`);
  }

  static async logout() {
    return axios.get(`${DEV_API}auth/logout`);
  }
}
