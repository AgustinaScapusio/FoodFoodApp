import { createSlice } from "@reduxjs/toolkit"

interface searchState {
    value : number
}

const initialState: searchState = {
    value: 0,
}

const searchSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        }

    }
})

export const { increment, decrement} = searchSlice.actions

export default searchSlice.reducer;