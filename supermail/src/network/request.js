import axios from "axios";
export function request(config) {
  /**
   * http://152.136.185.210:8000/api/h3
   * http://123.207.32.32:8000/api/h3
   * http://106.54.54.237:8000/api/h3
   */

  //1.创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/h3",
    timeout: 5000
  });

  //2.发送网络请求
  return instance(config);
}
