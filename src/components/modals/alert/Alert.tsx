import React, { useEffect } from "react";
import style from "./Alert.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { ADD_WORD, PUT_WORD } from "../../../redux/slice/WordsSlice";

const Alert = ({ show, hidden }: { show: boolean; hidden: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const wordAdded: boolean = useSelector((state: RootState) => state.WordsToolkit.wordAdded);
    const wordPUT: boolean = useSelector((state: RootState) => state.WordsToolkit.wordPut);
    const wordDelete: boolean = useSelector((state: RootState) => state.WordsToolkit.wordDelete);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            hidden(false);
            dispatch(ADD_WORD(false));
            dispatch(PUT_WORD(false));
        }, 2000);

        return () => clearTimeout(timer);
    }, [show]);

    return (
        <div className={show ? style.show_alert : style.hidden_alert}>
            {wordPUT ? (
                <p>Слово было изменено</p>
            ) : wordDelete ? (
                <p>Слово было удалено</p>
            ) : !wordAdded ? (
                <div>
                    <p>Сначала нужно выбрать слово</p>
                    <p>из первой колонки</p>
                </div>
            ) : (
                <p>Слово было добавлено в словарь</p>
            )}
        </div>
    );
};

export default Alert;
