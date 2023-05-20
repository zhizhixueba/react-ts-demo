/**
 * Author: Meng
 * Date: 2023-05-17
 * Desc:
 */

import React, { useState, useEffect } from "react";

import "./Menubar.scss";
import { escape } from "querystring";

type MenuItem = {
  id: number;
  name: string;
  tag: string;
  select: boolean;
  children?: Array<MenuItem>;
};

const Menubar = (props: any) => {
  const [items, setItems] = useState(props.items || []);
  
  useEffect(() => {}, props.items);

  function resetItem(items: Array<MenuItem>, item: MenuItem) {
    items.forEach((e: MenuItem) => {
      const childs = e.children||[];
      const tagItem = childs.find(tag => tag == item);
      if(tagItem) {
        // e.select = false;
        childs.forEach(obj => obj.select = false);
      }else {
        resetItem(childs, item);
      }
    });
  }

  function onItemTab(item: MenuItem) {
    resetItem(items, item);
    item.select = !item.select;
    setItems([].concat(items));
  }

  function itemView(item: MenuItem) {
    const hasChild = (item.children || []).length > 0;
    let labelStyle = null;
    if (hasChild) {
      labelStyle = item.select ? "label2" : "label";
    } else {
      labelStyle = item.select ? "value2" : "value";
    }

    return (
      <li className="item">
        <span className={labelStyle} onClick={() => onItemTab(item)}>
          {item.name}
        </span>
        {item.select ? (
          <ul className="list">{item.children?.map(itemView)}</ul>
        ) : (
          <></>
        )}
      </li>
    );
  }

  return (
    <div className="menubar">
      <ul>{items.map(itemView)}</ul>
    </div>
  );
};

export default Menubar;
