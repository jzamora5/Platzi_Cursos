import React from "react";

export function TodoHeader({ children, loading }) {
  React.Children.toArray(children).map((child) =>
    React.cloneElement(children, { loading })
  );

  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </header>
  );
}
