import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import Spinner from '../General/Spinner';

class Usuarios extends Component {
  componentDidMount() {
    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // this.setState({
    //   usuarios: response.data,
    // });
    this.props.traerTodos();
  }

  ponerContenido = () => {
    return (
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{this.ponerFilas()}</tbody>
      </table>
    );
  };

  ponerFilas = () =>
    this.props.usuarios.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  render() {
    if (this.props.cargando) {
      return <Spinner />;
    }

    return <div>{this.ponerContenido()}</div>;
  }
}

// export default Usuarios;
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
