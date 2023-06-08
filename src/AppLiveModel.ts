/**
 * Author: Meng
 * Date: 2023-
 * Desc:
 */
import { LiveData, LiveModel } from "hooks-widget";

import { test } from "./modules/apis/index";

export default class AppLiveModel extends LiveModel {
  public curDate = new LiveData<number>(Date.now());

  onLoad() {
    console.log("-----------> AppLiveModel");
    
  }

  onUpdateDate = () => {
    test();
    this.curDate.next(Date.now());
  };
}
