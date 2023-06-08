
/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import AccountLiveModel from "./AccountLiveModel";

let liveModel: AccountLiveModel | null = null;

export function AccountPage(props: any) {
  liveModel = new AccountLiveModel(props);
  return (
    <LiveComponent liveModel={liveModel}>
      <HooksWidget data={liveModel?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
