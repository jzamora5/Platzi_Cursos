import React from "react";

import Navbar from "./Navbar";

function Layout(props) {
  const children = props.children;
  return (
    // Para retornar 1 solo elemento pero no usar tantos divs
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
