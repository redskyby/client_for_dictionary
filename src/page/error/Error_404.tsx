import React from "react";
import style from "./Error_404.module.scss";
import { MAIN_PAGE } from "../../services/ConstRoutesPaths";
import { useNavigate } from "react-router-dom";

const Error_404 = () => {
    const history = useNavigate();

    const goBack = (): void => {
        history(MAIN_PAGE);
    };

    return (
        <div className={style.container}>
            <h2 className={style.container_main_text}>Ой , что-то пошло не так.</h2>
            <h3>ошибка 404.</h3>
            <button type={"button"} className={style.container_button} onClick={goBack}>
                Вернуться на главную страницу
            </button>
        </div>
    );
};

export default Error_404;
