import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Word {
    id: number;
    word: string;
}

const initialState = {
    words: [] as Word[],
    translate: [] as Word[],
    currentWord: {} as Word,
};

const WordSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        SET_WORDS: (state, action: PayloadAction<Word[]>) => {
            state.words = [...action.payload];
        },
        SET_TRANSLATE: (state, action: PayloadAction<Word[]>) => {
            state.translate = [...action.payload];
        },
        SET_CURRENT_WORD: (state, action: PayloadAction<Word>) => {
            state.currentWord = action.payload;
        },
    },
});

export default WordSlice.reducer;
export const { SET_WORDS, SET_TRANSLATE, SET_CURRENT_WORD } = WordSlice.actions;
