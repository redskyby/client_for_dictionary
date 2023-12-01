import React from "react";
import style from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import AppRoutes from "../appRoutes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className={style.reset}>
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
