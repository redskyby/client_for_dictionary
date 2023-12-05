import React from "react";
import style from "./MainPage.module.scss";
const MainPage = () => {
    const words: { id: number; name: string }[] = [
        { id: 1, name: "Pasha" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Glasha" },
        { id: 4, name: "Masha" },
        { id: 5, name: "Dasha" },
    ];
    const translate: { id: number; name: string }[] = [
        { id: 1, name: "Паша" },
        { id: 2, name: "Саша" },
        { id: 3, name: "Глаша" },
        { id: 4, name: "Маша" },
        { id: 5, name: "Даша" },
    ];

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
                                <li className={style.container_main_section_items_item} key={i.id}>
                                    {i.id}) {i.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <ul className={style.container_main_section_items}>
                        {translate.map((i) => {
                            return (
                                <li className={style.container_main_section_items_item} key={i.id}>
                                    {i.id}) {i.name}
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
