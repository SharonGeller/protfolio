import React from "react";
import styled from "styled-components";

const Row = ({ children, style, ...props }) => {
  return (
    <RowComponent style={style} {...props}>
      {children}
    </RowComponent>
  );
};

const RowComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Row;
