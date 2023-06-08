
/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import ProgramLiveModel from "./ProgramLiveModel";


let liveModel: ProgramLiveModel | null = null;

export function ProgramPage(props: any) {
  liveModel = new ProgramLiveModel(props);
  return (
    <LiveComponent liveModel={liveModel}>
      <HooksWidget data={liveModel?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
