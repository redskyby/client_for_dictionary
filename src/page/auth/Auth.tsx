import React, { useState } from "react";
import style from "./Auth.module.scss";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../services/ConstRoutesPaths";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("я работаю!");
    };
    return (
        <div className={style.container}>
            <div className={style.container_main_title}>
                <h2>Авторизация</h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className={style.container_form}>
                <div className={style.container_form_labels}>
                    <label className={style.container_form_label}>
                        <input
                            type={"email"}
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                            placeholder={"Введите свой email"}
                            required
                        />
                    </label>
                    <label className={style.container_form_label}>
                        <input
                            type={"password"}
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                            placeholder={"Введите свой password"}
                            required
                        />
                    </label>
                </div>
                <div className={style.container_form_footer_with_button_and_link}>
                    <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                    </div>
                    <button type={"submit"} className={style.container_form_button}>
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;
