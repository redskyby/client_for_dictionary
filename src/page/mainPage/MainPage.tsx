import React, { useEffect, useState } from "react";
import style from "./MainPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { REDUCE_ARRAY, SET_CURRENT_WORD, SET_TRANSLATES, SET_WORDS } from "../../redux/slice/WordsSlice";
import { RootState } from "../../redux";
import Alert from "../../components/modals/alert/Alert";
import WordsApi from "../../api/WordsApi";
import { Word } from "../../services/Interfeces";
import { Translate } from "../../services/Interfeces";
import { RingLoader } from "react-spinners";
import shuffleArray from "../../services/ShuffleArray";
import AlertAfterCompareTheWords from "../../components/modals/alertAfterCompareTheWords/AlertAfterCompareTheWords";

const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const currentWord: Word = useSelector((state: RootState) => state.WordsToolkit.currentWord);
    const [show, hidden] = useState<boolean>(false);
    const [showEqualAlert, setShowEqualAlert] = useState<boolean>(false);
    const [wrongEqual, setWrongEqual] = useState<boolean>(false);
    const words: Word[] = useSelector((state: RootState) => state.WordsToolkit.words);
    const translate: Translate[] = useSelector((state: RootState) => state.WordsToolkit.translate);

    useEffect(() => {
        WordsApi.getWords()
            .then((data) => {
                const { words, translations } = data;
                dispatch(SET_WORDS(words));
                dispatch(SET_TRANSLATES(shuffleArray(translations)));
                setLoading(false);
            })
            .catch((e) => console.log(e.message));
    }, []);

    const checkWords = (currentWord: Word, a: Translate) => {
        if (currentWord.wordId !== undefined) {
            if (currentWord.wordId === a.translationId) {
                setWrongEqual(true);
                setShowEqualAlert(true);
                dispatch(REDUCE_ARRAY(currentWord.wordId));
            } else {
                setWrongEqual(false);
                setShowEqualAlert(true);
                console.log("Не совпало");
            }
        } else {
            hidden(true);
        }
    };

    if (loading) {
        return (
            <div className={style.container}>
                <RingLoader color={"#36d7b7"} size={"100px"} />
            </div>
        );
    }

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
                                    key={i.wordId}
                                    onClick={() => dispatch(SET_CURRENT_WORD(i))}
                                >
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
                                <li
                                    className={style.container_main_section_items_item}
                                    key={i.translationId}
                                    onClick={() => checkWords(currentWord, i)}
                                >
                                    {i.translation1}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <Alert show={show} hidden={hidden} />
            <AlertAfterCompareTheWords show={showEqualAlert} hidden={setShowEqualAlert} equal={wrongEqual} />
        </div>
    );
};

export default MainPage;
