/**
 * Author: Meng
 * Date: 2023-
 * Desc:
 */
import { LiveData, Observer } from "hooks-widget";

import { test } from "./modules/apis/index";

export default class AppLiveData extends LiveData {
  public curDate = new Observer<number>(Date.now());

  onLoad() {
    console.log("-----------> AppLiveData");
    
  }

  onUpdateDate = () => {
    test();
    this.curDate.next(Date.now());
  };
}
