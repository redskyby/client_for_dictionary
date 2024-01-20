import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Word } from "../../services/Interfeces";
import { Translate } from "../../services/Interfeces";

const initialState = {
    words: [] as Word[],
    translate: [] as Translate[],
    currentWord: {} as Word,
    wordAdded: false,
    wordPut: false,
    wordDelete: false,
};

const WordSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        SET_WORDS: (state, action: PayloadAction<Word[]>) => {
            state.words = [...action.payload];
        },
        SET_TRANSLATES: (state, action: PayloadAction<Translate[]>) => {
            state.translate = [...action.payload];
        },
        SET_CURRENT_WORD: (state, action: PayloadAction<Word>) => {
            state.currentWord = action.payload;
        },
        ADD_WORD: (state, action: PayloadAction<boolean>) => {
            state.wordAdded = action.payload;
        },
        PUT_WORD: (state, action: PayloadAction<boolean>) => {
            state.wordPut = action.payload;
        },
        DELETE_WORD: (state, action: PayloadAction<boolean>) => {
            state.wordDelete = action.payload;
        },
        REDUCE_ARRAY: (state, action: PayloadAction<number>) => {
            state.words = [...state.words.filter((item) => item.wordId !== action.payload)];
            state.translate = [...state.translate.filter((item) => item.translationId !== action.payload)];
        },
    },
});

export default WordSlice.reducer;
export const { SET_WORDS, SET_TRANSLATES, SET_CURRENT_WORD, ADD_WORD, PUT_WORD, DELETE_WORD, REDUCE_ARRAY } =
    WordSlice.actions;
