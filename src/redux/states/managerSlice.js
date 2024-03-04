import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamento: "Guaviare",
  personaje:''
};

const managerSlice = createSlice({
  name: "Manager",
  initialState,
  reducers: {
    cambiarDepartamento(state, action) {
      state.departamento = action.payload;
    },
    establecerPersonaje(state, action){
      state.personaje = action.payload;
    }
  },
});

export const { cambiarDepartamento, establecerPersonaje } = managerSlice.actions

export default managerSlice.reducer;
