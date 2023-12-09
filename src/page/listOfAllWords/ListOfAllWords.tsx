import React, { useState } from "react";
import style from "./ListOfAllWords.module.scss";
import { useGetAllWordsQuery } from "../../redux/query/AllWordsQuery";
import { RingLoader } from "react-spinners";

const ListOfAllWords = () => {
    const [count, setCount] = useState<number>(1);
    const { data, isLoading, error } = useGetAllWordsQuery(count);

    return (
        <div className={style.container}>
            {error ? (
                <div className={style.error}>
                    <h1>Ошибка при загрузке данных, проверьте сетевое соединение.</h1>
                </div>
            ) : isLoading ? (
                <div className={style.loader}>
                    <RingLoader color={"#36d7b7"} size={"100px"} />
                </div>
            ) : data ? (
                <div className={style.list_all_words}>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
            ) : null}
        </div>
    );
};

export default ListOfAllWords;
