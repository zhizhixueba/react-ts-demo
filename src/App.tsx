/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc:
 */
import React from "react";
import { LiveComponent, HooksWidget } from "hooks-widget";
import "./App.css";
import AppLiveData from "./AppLiveData";

let liveData: AppLiveData | null = null;
function App(props: any) {
  liveData = new AppLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <h1>sdfsdsads</h1>
      <HooksWidget data={liveData?.curDate} child={dateView} />
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div onClick={liveData?.onUpdateDate}>{data}</div>;
}

export default App;
