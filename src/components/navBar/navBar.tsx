import React from "react";
import style from "./navBar.module.scss";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.container_logo}>
        <p>Dictionary.</p>
        <p>Good luck!</p>
      </div>
        <div>
            <button type={'button'}>Панель администратора</button>
            <button type={'button'}>Выход</button>
        </div>
    </div>
  );
};

export default NavBar;
