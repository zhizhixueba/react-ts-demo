/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */

import { LiveData, LiveModel } from "hooks-widget";

export default class MusicLiveModel extends LiveModel {
  public curDate = new LiveData<number>(Date.now());

  onLoad() {
  }

}
