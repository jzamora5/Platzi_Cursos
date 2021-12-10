import React from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (value === SECURITY_CODE) {
          setLoading(false);
          // setError(false);
        } else {
          setError(true);
          setLoading(false);
        }

        console.log("Terminando la validación la validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>

      {loading && <p>Cargando...</p>}
      {error && !loading && <p>Error: el código es incorrecto</p>}

      <input
        placeholder="Código de Seguridad"
        value={value}
        onChange={(event) => {
          // setError(false);
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          // setError(false); // ESTE FUE
          setLoading(true);
        }}
      >
        Comprobar
      </button>
    </div>
  );
};

export { UseState };
