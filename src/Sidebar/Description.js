import React from "react";
import styled from "styled-components";

export const Description = ({ description: { explanation } }) => {
  return (
    <Container>
      <Heading>Description:</Heading>
      <Content>{explanation}</Content>
    </Container>
  );
};

const Container = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;
`
const Heading = styled.h3`
    color: white;
` 

const Content = styled.p`
    text-align: left;
    color: #efefef;
`