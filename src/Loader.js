import React from "react";
import styled, { keyframes } from "styled-components";

export const Loader = () => {
  return (
    <LoaderIcon>
      <div></div>
      <div></div>
    </LoaderIcon>
  );
};

const LoaderAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoaderIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  
  & div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${LoaderAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;
