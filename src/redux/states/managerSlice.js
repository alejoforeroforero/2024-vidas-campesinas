import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamento: "",
  personaje: "",
  youtube: null,
  cancionActual: null,
  cancionAnterior: null,
  videoActual: null,
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
    changeVideo(state, action) {
      if (state.videoActual !== action.payload) {
        if (state.videoActual != null) {
          const prevVideo = document.getElementById(state.videoActual);

          if (!prevVideo.paused) {
            prevVideo?.pause();
          }
        }
      }

      state.videoActual = action.payload;

      if (state.videoActual != null) {
        const currentVideo = document.getElementById(action.payload);
        if (currentVideo.paused) {
          currentVideo.play();
        }
      }
    },
  },
});

export const {
  cambiarDepartamento,
  establecerPersonaje,
  cambiarYotube,
  escogerCancion,
  establecerYCanalA,
  changeVideo,
} = managerSlice.actions;

export default managerSlice.reducer;
