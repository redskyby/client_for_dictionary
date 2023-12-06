import React, { useEffect } from "react";
import style from "./Alert.module.scss";

const Alert = ({ show, hidden }: { show: boolean; hidden: React.Dispatch<React.SetStateAction<boolean>> }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            hidden(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [show]);

    return (
        <div className={show ? style.show_alert : style.hidden_alert}>
            <p>Сначало нужно выбрать слово</p>
            <p>из первой колонки</p>
        </div>
    );
};

export default Alert;
