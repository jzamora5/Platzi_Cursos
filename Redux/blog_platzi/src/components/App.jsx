import React from "react";

const App = () => {
  const ponerFilas = () => [
    <tr>
      <td>Jhoan</td>
      <td>jhoan@zamora.com</td>
      <td>jhoan.com</td>
    </tr>,
    <tr>
      <td>Laura</td>
      <td>laura@zamora.com</td>
      <td>laura.com</td>
    </tr>,
  ];

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default App;
