import { createSlice } from "@reduxjs/toolkit";
import { setApi } from "./ApiCall";
const slice = createSlice({
    name: "qr",
    initialState: {
        result: {},
        user: {},
        token: {},
        error: {}
    },
    reducers: {
        resultReducer: (state, action) => {
            state.result = action.payload;
        },
        tokenReducer: (state, action) => {
            state.token = action.payload;
        },
        errorReducer: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const login = (data) => setApi({
    // url: "/todos",
    url: "/qr/api/user/signIn",
    method: "post",
    data,
    success: slice.actions.tokenReducer,
    error: slice.actions.errorReducer
});


export default slice.reducer;