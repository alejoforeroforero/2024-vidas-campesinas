import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamento: "Guaviare",
};

const managerSlice = createSlice({
  name: "Manager",
  initialState,
  reducers: {
    cambiarDepartamento(state, action) {
      state.departamento = action.payload;
    },
  },
});

export const { cambiarDepartamento } = managerSlice.actions

export default managerSlice.reducer;
