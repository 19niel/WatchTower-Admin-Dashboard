import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "66cc88cc34c5a85aca0b4c8f",
    
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setMode: (state) => {    // changes mode to dark to light and vice versa
            state.mode = state.mode === 'light' ? "dark" : 'light';
        }
    }
})


export const {setMode } = globalSlice.actions;

export default globalSlice.reducer;