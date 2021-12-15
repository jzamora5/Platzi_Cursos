import React from "react";

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
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
  CONFIRM: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },
  WRITE: {
    ...state,
    value: action.payload,
  },
  CHECK: {
    ...state,
    loading: true,
  },
  DELETE: {
    ...state,
    deleted: true,
  },
  RESET: {
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

  console.log(`state`, state);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value === SECURITY_CODE) {
          dispatch({
            type: "CONFIRM",
          });
        } else {
          dispatch({
            type: "ERROR",
          });
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
          onChange={(event) => {
            dispatch({
              type: "WRITE",
              payload: event.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: "CHECK",
            });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmación. ¿Estas seguro?</p>
        <button
          onClick={() => {
            dispatch({
              type: "DELETE",
            });
          }}
        >
          Sí, eliminar
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "RESET",
            });
          }}
        >
          No, me arrepentí
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button
          onClick={() => {
            dispatch({
              type: "RESET",
            });
          }}
        >
          Resetear, volver atrás
        </button>
      </>
    );
  }
};

export { UseReducer };
