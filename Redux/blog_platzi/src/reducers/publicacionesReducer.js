import { ACTUALIZAR, CARGANDO, ERROR } from '../types/publicacionesTypes';

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: '',
};

const publicacionesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTUALIZAR:
      return {
        ...state,
        publicaciones: action.payload,
        cargando: false,
        error: '',
      };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    default:
      return state;
  }
};

export default publicacionesReducer;
