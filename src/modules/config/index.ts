/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */

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

// 项目配置项
export const app_config = {
  def_env: 'prod',
  def_host: 'def',
  env_hosts,
}