import React, { useState } from "react";

import styled from "styled-components";

import MenuItem from "./MenuItem";

const MenuListWrapp = styled.nav``;

const MenuListContent = styled.ul`
  display: flex;
  align-items: center;
`;

const MenuList = () => {
  const list = [
    { id: 1, title: "Карта", func: () => {} },
    { id: 2, title: "Профиль", func: () => {} },
    { id: 3, title: "Выйти", func: () => {} },
  ];

  const [active, setActive] = useState(list[0]);

  const changeActiveItem = (e, item) => {
    e.preventDefault();
    setActive(item);
  };

  return (
    <MenuListWrapp>
      <MenuListContent>
        {list.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            active={active}
            onClick={(e) => changeActiveItem(e, item)}
          />
        ))}
      </MenuListContent>
    </MenuListWrapp>
  );
};

export default MenuList;
