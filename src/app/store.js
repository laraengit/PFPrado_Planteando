import { configureStore } from "@reduxjs/toolkit";
import misplantasReducer from "../features/misplantasSlice.js";
import nuevaplantaReducer from "../features/nuevaPlantaSlice.js"

export const store = configureStore({
    reducer: {
        misplantas: misplantasReducer,
        nuevaplanta: nuevaplantaReducer

    }
})