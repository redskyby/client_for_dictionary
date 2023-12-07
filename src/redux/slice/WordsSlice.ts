import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Word } from "../../services/Interfeces";
import { Translate } from "../../services/Interfeces";

const initialState = {
    words: [] as Word[],
    translate: [] as Translate[],
    currentWord: {} as Word,
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
    },
});

export default WordSlice.reducer;
export const { SET_WORDS, SET_TRANSLATES, SET_CURRENT_WORD } = WordSlice.actions;
