import React, { useEffect } from "react";
import style from "./Alert.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { ADD_WORD } from "../../../redux/slice/WordsSlice";

const Alert = ({ show, hidden }: { show: boolean; hidden: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const wordAdded: boolean = useSelector((state: RootState) => state.WordsToolkit.wordAdded);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            hidden(false);
            dispatch(ADD_WORD(false));
        }, 2000);

        return () => clearTimeout(timer);
    }, [show]);

    return (
        <div className={show ? style.show_alert : style.hidden_alert}>
            {!wordAdded ? (
                <div>
                    <p>Сначало нужно выбрать слово</p>
                    <p>из первой колонки</p>
                </div>
            ) : (
                <p>Слово было добалено в словарь</p>
            )}
        </div>
    );
};

export default Alert;
