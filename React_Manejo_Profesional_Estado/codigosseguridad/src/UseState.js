import React from "react";

const UseState = ({ name }) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
        setLoading(false);
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
      {error && <p>Error: el código es incorrecto</p>}

      <input placeholder="Código de Seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
};

export { UseState };
