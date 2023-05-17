
/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import AccountLiveData from "./AccountLiveData";


let liveData: AccountLiveData | null = null;

export function AccountPage(props: any) {
  liveData = new AccountLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <HooksWidget data={liveData?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
