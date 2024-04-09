import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid'
import { useAddPlantaMutation } from "../app/services/plantar";

const initialStateplantas = {
    items:[]
}


export const misplantasSlice = createSlice({
    name: "misplantas",
    initialState: initialStateplantas,
    reducers:{
        agregarPlanta:(state,actions)=>{
            /* const idPlanta = uuid.v4()
            const planta = {...actions.payload, id:idPlanta } */
            state.items = [...state.items, actions.payload ]
            

        }
    }
})

export const {agregarPlanta} = misplantasSlice.actions

export default misplantasSlice.reducer