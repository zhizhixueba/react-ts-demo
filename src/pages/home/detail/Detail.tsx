/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc:
 */
import React from "react";
import { LiveComponent, HooksWidget } from "hooks-widget";
import DetailLiveData from "./DetailLiveData";

let liveData: DetailLiveData | null = null;

export function DetailPage(props: any) {
  liveData = new DetailLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <HooksWidget data={liveData?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
