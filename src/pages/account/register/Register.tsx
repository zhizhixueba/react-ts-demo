/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import RegisterLiveModel from "./RegisterLiveModel";


let liveModel: RegisterLiveModel | null = null;

export function RegisterPage(props: any) {
  liveModel = new RegisterLiveModel(props);
  return (
    <LiveComponent liveModel={liveModel}>
      <HooksWidget data={liveModel?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}

// export default Register;