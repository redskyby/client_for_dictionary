import React from "react";
import style from "./MainPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_WORD } from "../../redux/slice/WordsSlice";
import { RootState } from "../../redux";

interface Word {
    id: number;
    word: string;
}

const MainPage = () => {
    const dispatch = useDispatch();
    const currentWord: Word = useSelector((state: RootState) => state.WordsToolkit.currentWord);

    console.log("currentWord", currentWord);
    const words: Word[] = [
        { id: 1, word: "Pasha" },
        { id: 2, word: "Sasha" },
        { id: 3, word: "Glasha" },
        { id: 4, word: "Masha" },
        { id: 5, word: "Dasha" },
    ];
    const translate: Word[] = [
        { id: 1, word: "Паша" },
        { id: 2, word: "Саша" },
        { id: 3, word: "Глаша" },
        { id: 4, word: "Маша" },
        { id: 5, word: "Даша" },
    ];

    const checkWords = (currentWord: Word, a: Word) => {
        currentWord.id === a.id ? console.log("совпало") : console.log("Не совпало");
    };

    return (
        <div className={style.container}>
            <div className={style.container_main_text}>
                <h2>Let&apos;s match the words.</h2>
            </div>
            <div className={style.container_main_section}>
                <div>
                    <ul className={style.container_main_section_items}>
                        {words.map((i) => {
                            return (
                                <li
                                    className={style.container_main_section_items_item}
                                    key={i.id}
                                    onClick={() => dispatch(SET_CURRENT_WORD(i))}
                                >
                                    {i.id}) {i.word}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <ul className={style.container_main_section_items}>
                        {translate.map((i) => {
                            return (
                                <li
                                    className={style.container_main_section_items_item}
                                    key={i.id}
                                    onClick={() => checkWords(currentWord, i)}
                                >
                                    {i.id}) {i.word}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
