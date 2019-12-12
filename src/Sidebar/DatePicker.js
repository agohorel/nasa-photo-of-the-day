import React from "react";
import styled from "styled-components";

import colors from "../colors";
import breakpoints from "../breakpoints";
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
    border: none;
    background-color: ${colors.midgrey};
    color: ${colors.white};
    font-family: "Roboto", sans-serif;
    padding: 2px;

    &::-webkit-inner-spin-button {
      display: none;
    }

    &::-webkit-calendar-picker-indicator:hover {
      background: black;
    }

    &::-webkit-datetime-edit-text {
      padding: 0 1px;
    }
  }

  @media (max-width: ${breakpoints.cutoff}) {
    margin: 0 auto;
    padding-top: 4.1rem;

    input {
      width: 50%;
      display: block;
      margin: 0.5rem auto;
    }

    button {
      display: block;
      margin: 0 auto;
    }
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
