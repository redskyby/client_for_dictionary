import React, { useState } from "react";
import style from "./AddWord.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MAIN_PAGE } from "../../../services/ConstRoutesPaths";
import wordsApi from "../../../api/WordsApi";
import { ADD_WORD } from "../../../redux/slice/WordsSlice";
import Alert from "../alert/Alert";

const AddWord = ({ show, onHide }: { show: boolean; onHide: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [word, setWord] = useState<string>("");
    const [translate1, setTranslate1] = useState<string>("");
    const [translate2, setTranslate2] = useState<string>("");
    const history = useNavigate();
    const [showAlert, hiddenAlert] = useState<boolean>(false);
    const dispatch = useDispatch();

    const goBack = (): void => {
        history(MAIN_PAGE);
    };

    const addTheWordInTheDictionary = () => {
        wordsApi
            .createWord(word, translate1, translate2)
            .then(() => {
                dispatch(ADD_WORD(true));
                hiddenAlert(true);
            })
            .catch((e) => {
                console.log(e.message);
            })
            .finally(() => {
                setWord("");
                setTranslate1("");
                setTranslate2("");
            });
    };

    return (
        <div className={style.first_block}>
            {show && <div className={style.background_dark} onClick={() => onHide(false)} />}
            <div className={show ? style.container : style.hide}>
                <div className={style.container_main_text}>
                    <h2>Панель добавления слова</h2>
                </div>
                <form className={style.container_form}>
                    <div className={style.container_form_labels}>
                        <label className={style.container_form_labels_label}>
                            Слово на английском языке
                            <input
                                type="text"
                                placeholder={"Новое слово"}
                                value={word}
                                onChange={(e) => setWord(e.target.value)}
                            />
                        </label>
                        <label className={style.container_form_labels_label}>
                            Основной перевод на русском языке
                            <input
                                type="text"
                                placeholder={"Основной перевод"}
                                value={translate1}
                                onChange={(e) => setTranslate1(e.target.value)}
                            />
                        </label>
                        <label className={style.container_form_labels_label}>
                            Дополнительный перевод, может быть пустое значение
                            <input
                                type="text"
                                placeholder={"Уточняющий перевод"}
                                value={translate2}
                                onChange={(e) => setTranslate2(e.target.value)}
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
                        onClick={addTheWordInTheDictionary}
                    >
                        Добавить слово
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

export default AddWord;
