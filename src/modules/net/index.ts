/**
 * Author: Meng
 * Date: 2023-
 * Desc:
 */

import axios from "axios";
import {NoRequest, RequestParams } from "request-no";

// 环境及服务器设置
const env_hosts = {
  prod: {
    def: "http://def.demo.com",
    order: "http://order.demo.com",
  },
  test: {
    def: "http://def-test.demo.com",
    order: "http://order-test.demo.com",
  },
  dev: {
    def: "http://def-dev.demo.com",
    order: "http://order-dev.demo.com",
  },
};

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

function interceptor(data: any, headers: any) {
  console.log(data);
  console.log(headers);
  return {data, headers}
}

// network：可配置 fetch或axios
const instance = new NoRequest({
  network,
  parseData,
  interceptor,
  env_hosts,
  def_host: "def",
  def_env: "prod",
});

export function request(options: RequestParams) {
  return instance.request(options);
}
