import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { Sidebar } from "./Sidebar/Sidebar";
import { Logo } from "./Sidebar/Logo";
import { Description } from "./Sidebar/Description";
import { Image } from "./Image";
import { DatePicker } from "./Sidebar/DatePicker";

import { dateToday } from "./utils";

function App() {
  const [image, setImage] = useState({});
  const [date, setDate] = useState(dateToday());

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=true&date=${date}`
  //     )
  //     .then(res => setImage(res.data))
  //     .catch(err => console.error(err));
  // }, [date]);

  return (
    <div className="App">
      <Sidebar>
        <Logo></Logo>
        <DatePicker setDate={setDate}></DatePicker>
        <Description description={image}></Description>
      </Sidebar>
      <Image image={image}></Image>
    </div>
  );
}

export default App;
