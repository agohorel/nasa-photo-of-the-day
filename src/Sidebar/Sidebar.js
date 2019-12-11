import React from "react";
import styled from "styled-components";

export const Sidebar = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 300px;
  height: 100vh;
  background-color: #1c1c1c;
`;
