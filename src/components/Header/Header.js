import React from "react";

import styled from "styled-components";

import logoIcon from "../../assets/logo/logo.png";

import Logo from "../Logo/Logo";
import Menu from "../Menu/MenuList";

const HeaderWrapp = styled.header`
  background-color: #1c1a19;
  padding: 20px 50px 20px 27px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapp>
      <Logo url={logoIcon} />
      <Menu />
    </HeaderWrapp>
  );
};

export default Header;
