/**
 * Author: Meng
 * Date: 2023-05-17
 * Desc:
 */

import React, { useState, useEffect } from "react";

import './Menubar.scss';

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

  function onItemTab(item: MenuItem) {
    item.select = !item.select;
    setItems([].concat(items));
  }

  function itemView(item: MenuItem) {
    const valueStyle = (item.children||[]).length > 0 ? 'value2':'value'
    return (
      <li className="item">
        <span className={valueStyle} onClick={() => onItemTab(item)}>
          {item.name}
        </span>
        {item.select ? <ul className="list">{item.children?.map(itemView)}</ul> : <></>}
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
