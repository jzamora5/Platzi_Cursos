import React from "react";

function withStorageListener(WrapperComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    return (
      <WrapperComponent show={storageChange} toggleShow={setStorageChange} />
    );
  };
}

export { withStorageListener };
