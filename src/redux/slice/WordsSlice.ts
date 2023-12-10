import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Word } from "../../services/Interfeces";
import { Translate } from "../../services/Interfeces";
import shuffleArray from "../../services/ShuffleArray";

const initialState = {
    words: [] as Word[],
    translate: [] as Translate[],
    currentWord: {} as Word,
    wordAdded: false,
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
            shuffleArray(state.translate);
        },
        SET_CURRENT_WORD: (state, action: PayloadAction<Word>) => {
            state.currentWord = action.payload;
        },
        ADD_WORD: (state, action: PayloadAction<boolean>) => {
            state.wordAdded = action.payload;
        },
    },
});

export default WordSlice.reducer;
export const { SET_WORDS, SET_TRANSLATES, SET_CURRENT_WORD, ADD_WORD } = WordSlice.actions;
