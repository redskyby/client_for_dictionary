import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Word {
    id: number;
    word: string;
}

const initialState = {
    words: [] as Word[],
    translate: [] as Word[],
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
    },
});

export default WordSlice.reducer;
export const { SET_WORDS, SET_TRANSLATE } = WordSlice.actions;
