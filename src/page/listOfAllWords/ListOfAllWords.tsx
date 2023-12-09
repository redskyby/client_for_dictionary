import React, { useEffect, useRef, useState } from "react";
import style from "./ListOfAllWords.module.scss";
import { useGetAllWordsQuery } from "../../redux/query/AllWordsQuery";
import { RingLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { Translate, Word } from "../../services/Interfeces";
import { RootState } from "../../redux";
import { SET_TRANSLATES, SET_WORDS } from "../../redux/slice/WordsSlice";
import { MAIN_PAGE } from "../../services/ConstRoutesPaths";
import { useNavigate } from "react-router-dom";

const ListOfAllWords = () => {
    const [count, setCount] = useState<number>(5);
    const { data, isLoading, error } = useGetAllWordsQuery(count);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastElement = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();
    const words: Word[] = useSelector((state: RootState) => state.WordsToolkit.words);
    const translate: Translate[] = useSelector((state: RootState) => state.WordsToolkit.translate);
    const history = useNavigate();

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
    }, [data]);

    useEffect(() => {
        if (data !== undefined) {
            const { words, translations } = data;
            dispatch(SET_WORDS(words));
            dispatch(SET_TRANSLATES(translations));
        }
    }, [count]);

    const goBack = (): void => {
        history(MAIN_PAGE);
    };

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
                    <div className={style.list_all_words_buttons}>
                        <button type={"button"} className={style.list_all_words_buttons_button} onClick={goBack}>
                            Вернуться на главную страницу
                        </button>
                    </div>
                    <div className={style.container_main_section}>
                        <div>
                            <ul className={style.container_main_section_items}>
                                {words.map((i) => {
                                    return (
                                        <li className={style.container_main_section_items_item} key={i.wordId}>
                                            {i.wordId}) {i.word}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <ul className={style.container_main_section_items}>
                                {translate.map((i) => {
                                    return (
                                        <li className={style.container_main_section_items_item} key={i.translationId}>
                                            {i.translationId}) {i.translation1}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
            <div ref={lastElement}></div>
        </div>
    );
};

export default ListOfAllWords;
