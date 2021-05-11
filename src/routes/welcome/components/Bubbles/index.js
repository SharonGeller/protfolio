import React from "react";
import styled from "styled-components";
import Bubble from "./Bubble";

const Bubbles = () => {
  return (
    <Continer>
      <Bubble></Bubble>
    </Continer>
  );
};

const Continer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: red;
`;

export default Bubbles;
