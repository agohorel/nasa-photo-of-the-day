import React from "react";
import styled from "styled-components";

export const Sidebar = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  width: 20vw;
  min-width: 300px;
  height: 100vh;
  background-color: grey;
`;
