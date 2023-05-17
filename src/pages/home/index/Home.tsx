/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc:
 */
import React from "react";
import { LiveComponent, HooksWidget } from "hooks-widget";
import HeaderBar from "../../../components/header/HeaderBar";
import HomeLiveData from "./HomeLiveData";
import "./Home.scss";

let liveData: HomeLiveData | null = null;

export function HomePage(props: any) {
  liveData = new HomeLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <HeaderBar />
      <HooksWidget data={liveData?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
