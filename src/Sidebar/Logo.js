import React from "react";
import styled from "styled-components";
import logo from "../assets/nasa.png";

import breakpoints from "../breakpoints";
import measurements from "../measurements";

export const Logo = () => {
  return (
    <>
      <NasaLogo src={logo} />
      <SubText>Astronomy Photo Of The Day</SubText>
    </>
  );
};

const NasaLogo = styled.img`
  margin-top: 25px;
  width: 67%;

  @media (max-width: ${breakpoints.cutoff}) {
    width: 25%;
    min-width: 150px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0;
    padding: ${measurements.navPadding};
  }
`;

const SubText = styled.h4`
  max-width: 50%;
  margin: 0 auto;
  color: white;

  @media (max-width: ${breakpoints.cutoff}) {
    position: absolute;
    top: 0;
    right: 0;
    padding: ${measurements.navPadding};
  }
`;
