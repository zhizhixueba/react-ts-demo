/**
 * Author: Meng
 * Date: 2023-05-16
 * Desc:
 */
import React from "react";
import { useLocation } from "react-router-dom";
import { LiveComponent, HooksWidget } from "hooks-widget";
import { Menubar } from "../../../components/index";

import HomeLiveData from "./HomeLiveData";
import "./Home.scss";

let liveData: HomeLiveData | null = null;

export function HomePage(props: any) {
  let location = useLocation();
  const menuList: any[] = [
    {
      name: "测试1",
      select: true,
      children: [
        { name: "二级菜单", select: false },
        { name: "二级菜单2", select: false },
        { name: "二级菜单3", select: false },
      ],
    },
    {
      name: "测试2",
      select: false,
      children: [
        {
          name: "二级菜单4",
          select: false,
          children: [
            { name: "二级菜单11", select: false },
            { name: "二级菜单12", select: false },
            { name: "二级菜单13", select: false },
          ],
        },
        { name: "二级菜单5", select: false },
        { name: "二级菜单6", select: false },
      ],
    },
    {
      name: "测试3",
      select: false,
      children: [
        { name: "二级菜单7", select: false },
        { name: "二级菜单8", select: false },
        { name: "二级菜单9", select: false },
      ],
    },
    {
      name: "测试4",
      select: false,
      children: [
        { name: "二级菜单0", select: false },
        { name: "二级菜单10", select: false },
        {
          name: "二级菜单11",
          select: false,
          children: [
            { name: "二级菜单112", select: false },
            { name: "二级菜单113", select: false },
            { name: "二级菜单114", select: false },
          ],
        },
      ],
    },
  ];

  React.useEffect(() => {
    console.log("------> ", location);
  }, [location]);

  liveData = new HomeLiveData(props);
  return (
    <LiveComponent liveData={liveData}>
      <div className="home">
        <Menubar items={menuList} />
        <HooksWidget data={liveData?.curDate} child={dateView} />
      </div>
    </LiveComponent>
  );
}

function dateView(data: number) {
  return <div>{data}</div>;
}
