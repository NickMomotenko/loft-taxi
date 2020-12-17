import React, { useState } from "react";

import styled from "styled-components";

import Login from "./pages/Login/Login";
import Main from "./components/Main/Main";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [page, setPage] = useState("map");
  return (
    <AppWrapper>
      {/* <Login /> */}
      <Main page={page} setPage={setPage} />
    </AppWrapper>
  );
};

export default App;
