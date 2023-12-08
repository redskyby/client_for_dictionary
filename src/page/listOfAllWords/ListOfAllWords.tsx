import React from "react";
import style from "./ListOfAllWords.module.scss";
import { useGetAllWordsQuery } from "../../redux/query/AllWordsQuery";

const ListOfAllWords = () => {
    const { data, isLoading, error } = useGetAllWordsQuery();

    console.log(data);
    return <div></div>;
};

export default ListOfAllWords;
