
/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import ProgramLiveData from "./ProgramLiveData";


let liveData: ProgramLiveData | null = null;

export function ProgramPage(props: any) {
  liveData = new ProgramLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <HooksWidget data={liveData?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
