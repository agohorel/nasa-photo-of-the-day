import React from "react";
import styled from "styled-components";

export const DatePicker = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1; // january = 0!
  const dd = date.getDate();

  // format single digit days/months correctly
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  const todayFormatted = `${yyyy}-${mm}-${dd}`;

  return (
    <PickerContainer>
      <label for="picker">Select an image from another date:</label>
      <input
        type="date"
        id="picker"
        name="date"
        min="1995-06-16"
        max={todayFormatted}
      ></input>
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
