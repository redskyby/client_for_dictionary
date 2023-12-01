import React from "react";
import style from "./NavBar.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const NavBar = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.UserToolkit.isAuth);

    return (
        <div className={style.container}>
            <div className={style.container_logo}>
                <p>Dictionary.</p>
                <p>Good luck!</p>
            </div>
            <div>
                {isAuth ? (
                    <div className={style.container_block_with_buttons}>
                        <button type={"button"} className={style.container_block_with_buttons_button}>
                            Панель администратора
                        </button>
                        <button type={"button"} className={style.container_block_with_buttons_button}>
                            Выход
                        </button>
                    </div>
                ) : (
                    <div className={style.container_block_with_buttons}>
                        <button type={"button"} className={style.container_block_with_buttons_button}>
                            Зарегистрироваться
                        </button>
                        <button type={"button"} className={style.container_block_with_buttons_button}>
                            Войти
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
