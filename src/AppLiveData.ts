/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

import {LiveData, Observer} from 'hooks-widget';

export default class AppLiveData extends LiveData {

  public curDate = new Observer<number>(Date.now());

  onUpdateDate = () => {
    this.curDate.next(Date.now());
  }
} 