import React from "react";
import { useState } from "react";
import "/workspaces/valesa185-Traffic-Light/src/styles/index.css";
import Light from "./Light";

function Home() {
  const colors = ["red", "yellow", "green"];
  const [lit, setLit] = useState("red");

  return (
    <>
      <div className="alert alert-warning" role="alert">
        Puede darle click al semáforo y elegir un color específico o elegir uno
        al azar con el botón! 
      </div>
      <div className="Home">
        {colors.map((color, index) => {
          return <Light key={index} color={color} lit={lit} setLit={setLit} />;
        })}
      </div>
      <button
        className="Boton btn btn-warning"
        onClick={() => {
          setLit(colors[Math.floor(Math.random() * colors.length)]);
          console.log(lit);
        }}
      >
        Cambiar color
      </button>
    </>
  );
}

export default Home;
