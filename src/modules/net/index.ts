/**
 * Author: Meng
 * Date: 2023-
 * Desc:
 */

import axios from "axios";
import { NoRequest, RequestParams } from "request-no";
import { app_config } from "../config";


const { env_hosts, def_env, def_host } = app_config;
// 初始化 axios 实例
const axiosIns = axios.create({ timeout: 20000 });

// 配置 axios请求
function network(options: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axiosIns
      .request(options)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
        reject(err);
      });
  });
}

// 解析response数据 -
function parseData(res: any) {
  return { code: 0, data: {}, message: "", header: {} };
}

// 请求头及参数处理
function interceptor(data: any, headers: any) {
  return { data, headers };
}

// network：可配置 fetch或axios
const instance = new NoRequest({
  network,
  parseData,
  interceptor,
  env_hosts,
  def_host,
  def_env,
});

// 请求入口
export function request(options: RequestParams) {
  return instance.request(options);
}
