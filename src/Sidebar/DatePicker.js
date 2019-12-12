import React from "react";
import styled from "styled-components";

import colors from "../colors";
import { dateToday } from "../utils";

export const DatePicker = ({ setDate }) => {
  const todayFormatted = dateToday();

  return (
    <PickerContainer>
      <label htmlFor="picker">Select an image from another date:</label>
      <input
        type="date"
        id="picker"
        name="date"
        min="1995-06-16"
        max={todayFormatted}
      ></input>
      <Button onClick={() => setDate(document.querySelector("input").value)}>
        View
      </Button>
    </PickerContainer>
  );
};

const PickerContainer = styled.div`
  width: 90%;
  margin: 2rem auto;

  label {
    color: #aaa;
  }

  input {
    width: 90%;
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: ${colors.midgrey};
  color: ${colors.white};
  border: none;
  margin-top: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.2s ease-out all;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lightgrey};
    color: ${colors.black};
  }
`;
