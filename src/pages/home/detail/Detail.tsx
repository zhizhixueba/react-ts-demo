/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc:
 */
import React from "react";
import { LiveComponent, HooksWidget } from "hooks-widget";
import DetailLiveModel from "./DetailLiveModel";

let liveModel: DetailLiveModel | null = null;

export function DetailPage(props: any) {
  liveModel = new DetailLiveModel(props);
  return (
    <LiveComponent liveModel={liveModel}>
      <HooksWidget data={liveModel?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
