import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plantas:[]
}

export const plantasSlice = createSlice({
    name: "plantas",
    initialState:initialState,
    reducers:{
        agregarPlanta:(state,actions)=>state.items = [...state.items, actions.payload]
    }
})

export const {agregarPlanta} = plantasSlice