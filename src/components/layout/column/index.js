import React from "react";
import styled from "styled-components";

const Column = ({ children, style, ...props }) => {
  return (
    <ColumnComponent style={style} {...props}>
      {children}
    </ColumnComponent>
  );
};

const ColumnComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Column;
