import React, { useEffect } from "react";
import style from "./AlertAfterCompareTheWords.module.scss";

const AlertAfterCompareTheWords = ({
    show,
    hidden,
    equal,
}: {
    show: boolean;
    hidden: React.Dispatch<React.SetStateAction<boolean>>;
    equal: boolean;
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            hidden(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [show]);

    return (
        <div className={show ? style.show_alert : style.hidden_alert}>
            {equal ? (
                <div>
                    <p>Правильно!</p>
                </div>
            ) : (
                <div>
                    <p>Неправильно!</p>
                    <p>Будь внимательным!</p>
                </div>
            )}
        </div>
    );
};

export default AlertAfterCompareTheWords;
