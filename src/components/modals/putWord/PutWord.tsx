import React, { useState } from "react";
import style from "./PutWord.module.scss";
import { MAIN_PAGE } from "../../../services/ConstRoutesPaths";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";
import { useDispatch } from "react-redux";
import wordsApi from "../../../api/WordsApi";
import { PUT_WORD } from "../../../redux/slice/WordsSlice";

const PutWord = ({ show, onHide }: { show: boolean; onHide: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [id, setId] = useState<string>("");
    const [word, setWord] = useState<string>("");
    const [translate1, setTranslate1] = useState<string>("");
    const [translate2, setTranslate2] = useState<string>("");
    const history = useNavigate();
    const [showAlert, hiddenAlert] = useState<boolean>(false);
    const dispatch = useDispatch();

    const goBack = (): void => {
        history(MAIN_PAGE);
    };

    const putTheWordInTheDictionary = () => {
        wordsApi
            .putWord(id, word, translate1, translate2)
            .then(() => {
                dispatch(PUT_WORD(true));
                hiddenAlert(true);
            })
            .catch((e) => {
                console.log(e.message);
            })
            .finally(() => {
                setId("");
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
                    <h2>Панель для изменения слова</h2>
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
                        onClick={putTheWordInTheDictionary}
                    >
                        Изменить слово
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

export default PutWord;
