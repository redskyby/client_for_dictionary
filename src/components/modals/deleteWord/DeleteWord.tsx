import React, { useState } from "react";
import style from "./DeleteWord.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MAIN_PAGE } from "../../../services/ConstRoutesPaths";
import Alert from "../alert/Alert";
import wordsApi from "../../../api/WordsApi";
import { DELETE_WORD } from "../../../redux/slice/WordsSlice";

const DeleteWord = ({ show, onHide }: { show: boolean; onHide: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [id, setId] = useState<string>("");
    const history = useNavigate();
    const [showAlert, hiddenAlert] = useState<boolean>(false);
    const dispatch = useDispatch();

    const goBack = (): void => {
        history(MAIN_PAGE);
    };

    const deleteTheWordInTheDictionary = () => {
        wordsApi
            .deleteWord(id)
            .then(() => {
                dispatch(DELETE_WORD(true));
                hiddenAlert(true);
            })
            .catch((e) => {
                console.log(e.message);
            })
            .finally(() => {
                setId("");
            });
    };

    return (
        <div className={style.first_block}>
            {show && <div className={style.background_dark} onClick={() => onHide(false)} />}
            <div className={show ? style.container : style.hide}>
                <div className={style.container_main_text}>
                    <h2>Панель для удаления слова</h2>
                </div>
                <form className={style.container_form}>
                    <div className={style.container_form_labels}>
                        <label className={style.container_form_labels_label}>
                            Индекс
                            <input
                                type="number"
                                placeholder={"индекс"}
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </label>
                    </div>
                </form>
                <div className={style.container_form_buttons}>
                    <button type={"button"} className={style.container_form_buttons_button} onClick={goBack}>
                        Вернуться на главную страницу
                    </button>
                    <button
                        type={"button"}
                        className={style.container_form_buttons_button}
                        onClick={deleteTheWordInTheDictionary}
                    >
                        Удалить слово
                    </button>
                    <button
                        type={"button"}
                        className={style.container_form_buttons_button}
                        onClick={() => onHide(false)}
                    >
                        Закрыть окно
                    </button>
                </div>
                <Alert show={showAlert} hidden={hiddenAlert} />
            </div>
        </div>
    );
};

export default DeleteWord;
