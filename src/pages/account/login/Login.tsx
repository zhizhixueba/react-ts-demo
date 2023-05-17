/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import LoginLiveData from "./LoginLiveData";


let liveData: LoginLiveData | null = null;

export function LoginPage(props: any) {
  liveData = new LoginLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <HooksWidget data={liveData?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
