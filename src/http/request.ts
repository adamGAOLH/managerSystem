import $http from "./index";
import qs from "qs";

class request {
  static get = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      $http
        .get(url, { params: params })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static post = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      $http
        .post(url, { params: qs.stringify(params) })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static put = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      $http
        .put(url, { params: params })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  static delete = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      $http
        .delete(url, { params: params })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default request;
