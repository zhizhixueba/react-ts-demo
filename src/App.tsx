/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc:
 */
import React from "react";
import { RouterProvider } from "react-router-dom";
import { LiveComponent } from "hooks-widget";

import routers from "./pages/routers";

import AppLiveData from "./AppLiveData";
import "./App.css";

let liveData: AppLiveData | null = null;
function App(props: any) {
  liveData = new AppLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <RouterProvider router={routers} />
    </LiveComponent>
  );
}

export default App;
