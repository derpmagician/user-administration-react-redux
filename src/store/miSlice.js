import { createSlice } from "@reduxjs/toolkit"

export const miSlice = createSlice({
  name: "misTrabajadores",
  initialState: {
    trabajadores: [],
  },
  reducers: {
    agregarUnValor: (state, action) => {
      state.trabajadores=[...state.trabajadores, action.payload]
    },
    modifificarUnValor: (state, action) => {
      const {indice, nuevoContinente} = action.payload;
      state.trabajadores[indice].departamento = nuevoContinente
    },
    // eliminarUnValor: (state, action) => {
    //   const {nombre, apellido, telefono} = action.payload;
    //   state.trabajadores = state.trabajadores.find((trabajador) =>
    //     trabajador.name.first !== nombre &&
    //     trabajador.name.last !== apellido &&
    //     trabajador.cell !== telefono
    //   )
    // },
    eliminarUnValor: (state, action) => {
      const {nombre, apellido, telefono} = action.payload;
      state.trabajadores = state.trabajadores.filter((trabajador) => {
        return trabajador.name.first !== nombre &&
        trabajador.name.last !== apellido &&
        trabajador.cell !== telefono;
      });
    }
    
  }
});

export const dptosSlice = createSlice({
  name: "misDptos",
  initialState: {
    departamentos: ["Africa", "America", "Asia", "Europa", "Oceania", "Antartida"],
  },
  reducers: {
  }
})

export const otroSlice = createSlice({
  name: "otroValor",
  initialState: {
    puntuacion: 0,
  },
  reducers: {
    incrementarNumero: (state, action) => {
      state.puntuacion += 1
    }
  }
})

export const { incrementarNumero } = otroSlice.actions;
export const { agregarUnValor, modifificarUnValor, eliminarUnValor } = miSlice.actions;


