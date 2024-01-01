import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    role: "user",
};

const UserSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        IS_SET_AUTH: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        IS_SET_ROLE: (state, action: PayloadAction<string>) => {
            state.role = action.payload;
        },
    },
});

export default UserSlice.reducer;
export const { IS_SET_AUTH, IS_SET_ROLE } = UserSlice.actions;
