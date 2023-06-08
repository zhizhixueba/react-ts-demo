/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */

import { LiveData, LiveModel } from "hooks-widget";

export default class HomeLiveModel extends LiveModel {
  public curDate = new LiveData<number>(Date.now());

  onLoad() {
    
  }


  onUpdateDate = () => {
    this.curDate.update(Date.now());
    // const screen = window.app_bridge.screenSize()
    // console.log(screen)
    // alert(screen)
  }
}
