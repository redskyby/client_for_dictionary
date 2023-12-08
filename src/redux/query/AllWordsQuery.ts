import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Word } from "../../services/Interfeces";

export const AllWordsQuery = createApi({
    reducerPath: "AllWordsQuery",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (build) => ({
        getAllWords: build.query<Word[], void>({
            query: () => "api/word/getAll",
        }),
    }),
});

export const { useGetAllWordsQuery } = AllWordsQuery;
