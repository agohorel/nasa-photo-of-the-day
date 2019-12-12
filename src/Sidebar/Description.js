import React from "react";
import styled from "styled-components";

import colors from "../colors";

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
`;
const Heading = styled.h3`
  color: ${colors.white};
  text-align: left;
`;

const Content = styled.p`
  text-align: left;
  color: ${colors.lightgrey};
`;
