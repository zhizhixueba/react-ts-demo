/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */
import {request} from '../net/index';

export function test() {
  return request({url: '/test/demo', method: 'GET', data: {user: '123', memo: '12314'}, headers: {token: '123123121'}});
}