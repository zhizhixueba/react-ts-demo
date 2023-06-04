/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */

import { LiveData, Binder } from "hooks-widget";

export default class RegisterLiveData extends LiveData {
  public curDate = new Binder<number>(Date.now());

  onLoad() {
  }

}
