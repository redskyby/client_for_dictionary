import React from "react";
import style from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
