/**
 * Author: Meng
 * Date: 2023-05-17
 * Desc: 标题栏
 */

// import React from "react";

import Images from "../../assets/index";
import "./HeaderBar.scss";

type TabObj = { id: number; name: string; select: boolean };

const tab_list: TabObj[] = [
  { id: 0, name: "音乐", select: false },
  { id: 1, name: "建模", select: false },
  { id: 2, name: "编程", select: false },
  { id: 3, name: "移动端", select: false },
  { id: 4, name: "后端", select: false },
  { id: 5, name: "前端", select: false },
  { id: 6, name: "Blog", select: false },
];

function HeaderBar(props: any) {

  function tabView(item: TabObj) {
    return <span key={item.id} className="button tab">{item.name}</span>;
  }

  return (
    <div className="header">
      <img className="button logo" src={Images.logo}/>
      <div className="flex" />
      {tab_list.map(tabView)}
    </div>
  );
}

export default HeaderBar;
