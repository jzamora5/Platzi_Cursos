import {
  ACTUALIZAR,
  COM_ACTUALIZAR,
  CARGANDO,
  COM_CARGANDO,
  ERROR,
  COM_ERROR,
} from '../types/publicacionesTypes';

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: '',
  com_cargando: false,
  com_error: '',
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

    case COM_ACTUALIZAR:
      return {
        ...state,
        publicaciones: action.payload,
        com_cargando: false,
        com_error: '',
      };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    case COM_CARGANDO:
      return { ...state, com_cargando: true };

    case COM_ERROR:
      return { ...state, com_error: action.payload, com_cargando: false };

    default:
      return state;
  }
};

export default publicacionesReducer;
