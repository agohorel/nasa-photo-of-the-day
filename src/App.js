import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { Sidebar } from "./Sidebar/Sidebar";
import { Logo } from "./Sidebar/Logo";
import { Description } from "./Sidebar/Description";
import { Image } from "./Image";

function App() {
  const [image, setImage] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      // .then(res => console.log(res))
      .then(res => setImage(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Sidebar>
        <Logo></Logo>
        <Description description={image}></Description>
      </Sidebar>
      <Image image={image}></Image>
    </div>
  );
}

export default App;
