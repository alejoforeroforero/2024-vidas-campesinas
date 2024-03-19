import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamento: "",
  personaje: "",
  youtube: null,
  cancionActual: null,
  cancionAnterior: null,
  yCanalA: 0,
};

const managerSlice = createSlice({
  name: "Manager",
  initialState,
  reducers: {
    cambiarDepartamento(state, action) {
      state.departamento = action.payload;
    },
    establecerPersonaje(state, action) {
      state.personaje = action.payload;
    },
    cambiarYotube(state, action) {
      state.youtube = action.payload;
    },
    escogerCancion(state, action) {
      state.cancionAnterior = state.cancionActual;
      state.cancionActual = action.payload;
    },
    establecerYCanalA(state, action) {
      state.yCanalA = action.payload;
    },
  },
});

export const {
  cambiarDepartamento,
  establecerPersonaje,
  cambiarYotube,
  escogerCancion,
  establecerYCanalA,
} = managerSlice.actions;

export default managerSlice.reducer;
