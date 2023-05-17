/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */

import { LiveData, Observer } from "hooks-widget";

export default class LoginLiveData extends LiveData {
  public curDate = new Observer<number>(Date.now());

  onLoad() {
    console.log("----------->", this.props);
  }

}
