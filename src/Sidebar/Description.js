import React from "react";
import styled from "styled-components";

import colors from "../colors";
import breakpoints from "../breakpoints";

export const Description = ({ description: { explanation } }) => {
  return (
    <Container>
      {explanation ? <Heading>Description:</Heading> : null}

      <Content>{explanation}</Content>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;

  @media (max-width: ${breakpoints.cutoff}){
    display: none;
  }
`;
const Heading = styled.h3`
  color: ${colors.white};
  text-align: left;
`;

const Content = styled.p`
  text-align: left;
  color: ${colors.lightgrey};
`;
