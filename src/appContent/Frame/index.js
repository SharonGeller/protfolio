import React from "react";
import styled from "styled-components";

const Frame = ({ children }) => {
  return <Background>{children}</Background>;
};

const Background = styled.div`
  background: #5cdb95;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export default Frame;
