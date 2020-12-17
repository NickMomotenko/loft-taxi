import React from "react";

import styled from "styled-components";

const PaperWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 59px 44px 69px;
  display: inline-block;
  /* max-width: 822px;
  width: 100%; */
`;

const Paper = ({ children }) => {
  return <PaperWrapp>{children}</PaperWrapp>;
};

export default Paper;
