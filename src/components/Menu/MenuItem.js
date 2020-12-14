import React from "react";

import styled from "styled-components";

const MenuItemWrapp = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const MenuItemLink = styled.a`
  color: ${(props) => (props.active.id == props.item.id ? "#FDBF5A" : "#fff")};
  font-size: 21px;
`;

const MenuItem = ({ active, item, onClick }) => {
  return (
    <MenuItemWrapp>
      <MenuItemLink active={active} item={item} href="#" onClick={onClick}>
        {item.title}
      </MenuItemLink>
    </MenuItemWrapp>
  );
};

export default MenuItem;
