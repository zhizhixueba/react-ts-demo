/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */

import { LiveData, Binder } from "hooks-widget";

export default class DetailLiveData extends LiveData {
  public curDate = new Binder<number>(Date.now());

  onLoad() {
  }

}
