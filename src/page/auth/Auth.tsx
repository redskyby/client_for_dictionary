import React, { useState } from "react";
import style from "./Auth.module.scss";

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
            <div>
                <h2>Авторизация</h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Email :
                    <input
                        type={"email"}
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                        placeholder={"Введите свой email"}
                        required
                    />
                </label>
                <label>
                    Password :
                    <input
                        type={"password"}
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                        placeholder={"Введите свой password"}
                        required
                    />
                </label>
                <button type={"submit"}>Войти</button>
            </form>
        </div>
    );
};

export default Auth;
