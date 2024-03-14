import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamento: '',
  personaje:'',
  youtube:null
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
    },
    cambiarYotube(state, action){
      state.youtube = action.payload
    }

  },
});

export const { cambiarDepartamento, establecerPersonaje, cambiarYotube } = managerSlice.actions

export default managerSlice.reducer;
