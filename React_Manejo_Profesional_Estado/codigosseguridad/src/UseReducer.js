import React from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.development";

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  confirm: "CONFIRM",
  error: "ERROR",
  write: "WRITE",
  check: "CHECK",
  delete: "DELETE",
  reset: "RESET",
};

// const reducer = (state, action) => {
// }

const reducerIf = (state, action) => {
  if (action.type === "ERROR") {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === "CHECK") {
    return { ...state, loading: true };
  } else {
    return {
      ...state,
    };
  }
};

const reducerSwitch = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "CHECK":
      return {
        ...state,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

const reducerObject = (state, action) => ({
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.write]: {
    ...state,
    value: action.payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action)?.[action.type] ?? state;
};

const SECURITY_CODE = "paradigma";

const UseReducer = ({ name }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onReset = () => dispatch({ type: actionTypes.reset });

  const onWrite = ({ target: { value } }) => {
    dispatch({
      type: actionTypes.write,
      payload: value,
    });
  };

  console.log(`state`, state);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log("Terminando la validación la validación");
      }, 2000);
    }

    console.log("Terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>

        {state.loading && <p>Cargando...</p>}
        {state.error && !state.loading && <p>Error: el código es incorrecto</p>}

        <input
          placeholder="Código de Seguridad"
          value={state.value}
          onChange={onWrite}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmación. ¿Estas seguro?</p>
        <button onClick={onDelete}>Sí, eliminar</button>
        <button onClick={onReset}>No, me arrepentí</button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button onClick={onReset}>Resetear, volver atrás</button>
      </>
    );
  }
};

export { UseReducer };
