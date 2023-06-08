/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import LoginLiveModel from "./LoginLiveModel";


let liveModel: LoginLiveModel | null = null;

export function LoginPage(props: any) {
  liveModel = new LoginLiveModel(props);
  return (
    <LiveComponent liveModel={liveModel}>
      <HooksWidget data={liveModel?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
