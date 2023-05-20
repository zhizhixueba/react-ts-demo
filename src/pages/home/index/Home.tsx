/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc:
 */
import React from "react";
import { useLocation } from "react-router-dom";
import { LiveComponent, HooksWidget } from "hooks-widget";
import HomeLiveData from "./HomeLiveData";
import "./Home.scss";

let liveData: HomeLiveData | null = null;

export function HomePage(props: any) {

  let location = useLocation();

  React.useEffect(() => {
    console.log('------> ', location)
  }, [location]);

  liveData = new HomeLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <div className="home">
        <HooksWidget data={liveData?.curDate} child={dateView} />
      </div>
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
