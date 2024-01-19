import React from "react";
import style from "./PutWord.module.scss";
import { MAIN_PAGE } from "../../../services/ConstRoutesPaths";
import { useNavigate } from "react-router-dom";

const PutWord = ({ show, onHide }: { show: boolean; onHide: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const history = useNavigate();

    const goBack = (): void => {
        history(MAIN_PAGE);
    };

    return (
        <div className={style.first_block}>
            {show && <div className={style.background_dark} onClick={() => onHide(false)} />}
            <div className={show ? style.container : style.hide}>
                <div className={style.container_main_text}>
                    <h2>Панель для изменения слова</h2>
                </div>
            </div>
        </div>
    );
};

export default PutWord;
