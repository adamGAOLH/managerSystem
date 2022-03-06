import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

enum MESG {
  "操作成功" = 200,
  "密码错误" = 201,
  "帐号错误" = 202,
  "请求异常" = 500,
}
const $http = axios.create({
  timeout: 5000,
  baseURL: "",
  headers: {
    "Content-Type": "applictaion/json;charset=utf-8",
  },
});

$http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = config.headers || {};

    config.headers.token = sessionStorage.getItem("token") || "123";

    return config;
  },
  (error: AxiosError) => {
    console.log(error);
  }
);

$http.interceptors.response.use(
  (response: AxiosResponse) => {
    const code: number = response.data?.code;
    if (code !== 200) {
      alert(MESG[code]);
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
  },
  (error: AxiosError) => {
    console.log(error);
  }
);

export default $http;
