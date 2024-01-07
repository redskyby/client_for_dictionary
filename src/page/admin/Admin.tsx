import React, { useState } from "react";
import style from "./Admin.module.scss";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE } from "../../services/ConstRoutesPaths";
import AddWord from "../../components/modals/addWord/AddWord";

const Admin = () => {
    const [addWordVisible, setAddWordVisible] = useState<boolean>(false);
    const [putWordVisible, setPutWordVisible] = useState<boolean>(false);
    const [deleteWordVisible, setDeleteWordVisible] = useState<boolean>(false);

    const history = useNavigate();

    const goBack = (): void => {
        history(MAIN_PAGE);
    };

    return (
        <div className={style.container}>
            <div className={style.container_main_text}>
                <h3>Панель администратора</h3>
            </div>

            <div className={style.container_form_buttons}>
                <button type={"button"} className={style.container_form_buttons_button} onClick={goBack}>
                    Добавить слово
                </button>
                <button type={"button"} className={style.container_form_buttons_button} onClick={goBack}>
                    Исправить слово
                </button>
                <button type={"button"} className={style.container_form_buttons_button} onClick={goBack}>
                    Удалить слово
                </button>
            </div>
            <AddWord show={addWordVisible} onHide={() => setAddWordVisible(false)} />
        </div>
    );
};

export default Admin;
