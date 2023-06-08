/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc:
 */
import React from "react";
import { RouterProvider } from "react-router-dom";
import { LiveComponent } from "hooks-widget";

import HeaderBar from "./components/header/HeaderBar";
import routers from "./pages/routers";

import AppLiveModel from "./AppLiveModel";
import "./App.css";

let liveModel: AppLiveModel | null = null;
function App(props: any) {

  liveModel = new AppLiveModel(props);
  return (
    <LiveComponent liveModel={liveModel}>
      <div className="App">
        <HeaderBar />
        <RouterProvider router={routers}/>
      </div>
    </LiveComponent>
  );
}

export default App;
