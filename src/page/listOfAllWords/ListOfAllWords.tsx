import React, { useEffect, useRef, useState } from "react";
import style from "./ListOfAllWords.module.scss";
import { useGetAllWordsQuery } from "../../redux/query/AllWordsQuery";
import { RingLoader } from "react-spinners";

const ListOfAllWords = () => {
    const [count, setCount] = useState<number>(1);
    const { data, isLoading, error } = useGetAllWordsQuery(count);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (data) {
            if (observer.current) {
                observer.current.disconnect();
            }
            const callBack: IntersectionObserverCallback = (entries) => {
                if (entries[0].isIntersecting && count <= data.totalCount) {
                    setCount((prevCount) => prevCount + 1);
                }
            };

            observer.current = new IntersectionObserver(callBack);

            if (lastElement.current) {
                observer.current.observe(lastElement.current);
            }
        }
    }, [count, data]);

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
                    <div className={style.list_all_words_main_title}>
                        <h2>Список всех слов</h2>
                        <h3>Всего слов : {data?.totalCount}</h3>
                    </div>
                    <div></div>
                </div>
            ) : null}
            <div ref={lastElement}></div>
        </div>
    );
};

export default ListOfAllWords;
