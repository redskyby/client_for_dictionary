import React from "react";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.container_logo}>
        <p>Dictionary.</p>
        <p>Good luck!</p>
      </div>
      <div className={style.container_block_with_buttons}>
        <button
          type={"button"}
          className={style.container_block_with_buttons_button}
        >
          Панель администратора
        </button>
        <button
          type={"button"}
          className={style.container_block_with_buttons_button}
        >
          Выход
        </button>
      </div>
    </div>
  );
};

export default NavBar;
