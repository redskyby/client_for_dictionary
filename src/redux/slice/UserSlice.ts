import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isAuth: true,
};

const UserSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        IS_SET_AUTH: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
    },
});

export default UserSlice.reducer;
export const { IS_SET_AUTH } = UserSlice.actions;
