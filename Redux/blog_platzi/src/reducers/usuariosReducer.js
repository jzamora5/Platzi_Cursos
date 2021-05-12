import { TRAER_TODOS } from '../types/usuariosTypes';

const INITIAL_STATE = {
  usuarios: [],
};

const usuariosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, usuarios: action.payload };

    default:
      return state;
  }
};

export default usuariosReducer;
