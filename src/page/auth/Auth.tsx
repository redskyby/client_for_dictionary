import React, { useState } from "react";
import style from "./Auth.module.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_PAGE, REGISTRATION_ROUTE } from "../../services/ConstRoutesPaths";
import { useDispatch } from "react-redux";
import { IS_SET_AUTH } from "../../redux/slice/UserSlice";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();
    const isLogin : boolean = location.pathname === LOGIN_ROUTE;


    const logIn = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(IS_SET_AUTH(true));
        history(MAIN_PAGE);
    };
    return (
        <div className={style.container}>
            <div className={style.container_main_title}>
                <h2>Авторизация</h2>
            </div>
            <form className={style.container_form}>
                <div className={style.container_form_labels}>
                    <label className={style.container_form_label}>
                        <input
                            type={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={"Введите свой email"}
                            required
                        />
                    </label>
                    <label className={style.container_form_label}>
                        <input
                            type={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={"Введите свой password"}
                            required
                        />
                    </label>
                </div>
                <div className={style.container_form_footer_with_button_and_link}>
                    <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                    </div>
                    <button type={"submit"} className={style.container_form_button} onClick={(e) => logIn(e)}>
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;
