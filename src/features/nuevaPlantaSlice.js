import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid'
const initialState = {
    nombre:"",
    /* especie:"",
    riego:"",
    cuidados:"" */

}

export const nuevaPlantaSlice = createSlice({
    name: "nuevaplanta",
    initialState: initialState,
    reducers:{
        setPlanta:(state,actions)=>state=actions.payload,
    }
})
export const  {setPlanta} = nuevaPlantaSlice.actions

export default nuevaPlantaSlice.reducer