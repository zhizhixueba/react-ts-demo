
/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc: 
 */
import React from 'react';
import { LiveComponent, HooksWidget } from "hooks-widget";
import MusicLiveModel from "./MusicLiveModel";


let liveModel: MusicLiveModel | null = null;

export function MusicPage(props: any) {
  liveModel = new MusicLiveModel(props);
  return (
    <LiveComponent liveModel={liveModel}>
      <HooksWidget data={liveModel?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
