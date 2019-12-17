import React from "react";
import styled from "styled-components";

import colors from "../colors";
import breakpoints from "../breakpoints";
import measurements from "../measurements";

export const Sidebar = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: ${measurements.sidebarWidth};
  height: 100vh;
  background-color: ${colors.darkgrey};
  box-shadow: 10px 0px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.cutoff}) {
    position: relative;
    width: 100%;
    height: ${measurements.navHeight};
  }
`;
