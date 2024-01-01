import React from "react";
import style from "./NavBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { ADMIN_ROUTE, LIST_OF_ALL_WORDS, LOGIN_ROUTE } from "../../services/ConstRoutesPaths";
import { useNavigate } from "react-router-dom";
import { IS_SET_AUTH } from "../../redux/slice/UserSlice";

const NavBar = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.UserToolkit.isAuth);
    const dispatch = useDispatch();
    const history = useNavigate();

    const logOut = (): void => {
        dispatch(IS_SET_AUTH(false));
        localStorage.removeItem("token");
        history(LOGIN_ROUTE);
    };

    return (
        <div className={style.container}>
            <div className={style.container_logo}>
                <p>Dictionary.</p>
                <p>Good luck!</p>
            </div>
            <div>
                {isAuth ? (
                    <div className={style.container_block_with_buttons}>
                        <button
                            type={"button"}
                            className={style.container_block_with_buttons_button}
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Панель администратора
                        </button>
                        <button
                            type={"button"}
                            className={style.container_block_with_buttons_button}
                            onClick={() => history(LIST_OF_ALL_WORDS)}
                        >
                            Просмотреть все слова
                        </button>
                        <button
                            type={"button"}
                            className={style.container_block_with_buttons_button}
                            onClick={() => logOut()}
                        >
                            Выход
                        </button>
                    </div>
                ) : (
                    <div className={style.container_block_with_buttons}>
                        <button
                            type={"button"}
                            className={style.container_block_with_buttons_button}
                            onClick={() => history(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
