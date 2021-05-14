import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/usersx'
    );
    dispatch({
      type: TRAER_TODOS,
      payload: response.data,
    });
  } catch (error) {
    console.log('Error: ', error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
