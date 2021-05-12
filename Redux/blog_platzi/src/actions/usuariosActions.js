import axios from 'axios';
import { TRAER_TODOS } from '../types/usuariosTypes';

export const traerTodos = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  dispatch({
    type: TRAER_TODOS,
    payload: response.data,
  });
};
