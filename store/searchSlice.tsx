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
        meow : (state) => {
            state.value += 1;
        },
        demeow : (state) => {
            state.value -= 1;
        }

    }
})

export const { meow, demeow} = searchSlice.actions

export default searchSlice.reducer;