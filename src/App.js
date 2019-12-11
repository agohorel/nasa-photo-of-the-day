import React from "react";
import "./App.css";

import { Sidebar } from "./Sidebar/Sidebar";
import { Logo } from "./Sidebar/Logo";
import { Description } from "./Sidebar/Description";
import { Image } from "./Image";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Logo></Logo>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          accusantium placeat voluptas quia. Consectetur labore possimus debitis
          facere. Optio, quis?
        </Description>
      </Sidebar>
      <Image></Image>
    </div>
  );
}

export default App;
