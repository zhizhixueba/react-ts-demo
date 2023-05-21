/**
 * Author: Meng
 * Date: 2023-05-17
 * Desc:
 */

import React, { useState, useEffect, useRef } from "react";

import "./Menubar.scss";

type MenuItem = {
  id: number;
  name: string;
  tag?: string;
  select: boolean;
  parents?: Array<number>;
  children?: Array<MenuItem>;
};

interface MenuProps {
  items: Array<MenuItem>;
  onChange?: (item: MenuItem) => void;
}

const Menubar = (props: Readonly<MenuProps>) => {
  const lastIdxs = useRef<Array<number>>([]);
  const [items, setItems] = useState(props.items || []);

  useEffect(() => {
    initItems(items);
  }, props.items);

  function initItems(list?: Array<MenuItem>, idxs?: Array<number>) {
    if (list) {
      list.forEach((item: MenuItem, index: number) => {
        const parents = (idxs || []).concat([index]);
        item.parents = parents;
        if (item.children) {
          initItems(item.children, parents);
        }
      });
    }
  }

  function resetItems(
    reset: boolean,
    list?: Array<MenuItem>,
    idxs?: Array<number>
  ) {
    if (list && idxs && idxs.length > 0) {
      const item = list[idxs[0]];
      const level = idxs.length;
      if (reset) {
        item.select = false;
      } else {
        item.select = level > 1 ? true : !item.select;
      }
      resetItems(
        reset,
        item.children,
        idxs.filter((_, idx) => idx > 0)
      );
    }
  }

  function onItemTab(item: MenuItem) {
    console.log(lastIdxs.current, item.parents);
    if (item.parents != lastIdxs.current) {
      resetItems(true, items, lastIdxs.current);
    }
    resetItems(false, items, item.parents);
    lastIdxs.current = item.parents || [];
    setItems(items.concat([]));
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
      <li key={item.name} className="item">
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
