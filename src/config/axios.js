import axios from 'axios';
class Api {
  static _axios = null;
  static instance() {
    if (this._axios == null) {
      this._axios = axios.create({
        baseURL: 'https://api.github.com/',
        timeout: 2000,
      });
    }
    return this._axios;
  }
}

export class DataApi {
  static getUsers() {
    return Api.instance().get('users?since=0');
  }
}
