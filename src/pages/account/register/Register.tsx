/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import RegisterLiveData from "./RegisterLiveData";


let liveData: RegisterLiveData | null = null;

export function RegisterPage(props: any) {
  liveData = new RegisterLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <HooksWidget data={liveData?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}

// export default Register;