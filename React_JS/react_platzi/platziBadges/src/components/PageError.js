import React from "react";

import "./styles/PageError.css";
import Loader from "./Loader";

function PageError(props) {
  return <div className="PageError">{props.error.message}</div>;
}

export default PageError;
