import React from "react";

import styled from "styled-components";

import logoIcon from "../../assets/logo/main-logo.png";

const LogoWrapp = styled.a`
  display: inline-block;
`;

const LogoIcon = styled.img.attrs(({ url }) => ({
  src: `${url}`,
}))``;

const Logo = ({ url }) => {
  return (
    <LogoWrapp href="#">
      <LogoIcon url={url ? url : logoIcon} />
    </LogoWrapp>
  );
};

export default Logo;
