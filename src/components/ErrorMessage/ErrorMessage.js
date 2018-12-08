import React from "react";

const ErrorMessage = props => (
  <div
    style={{ marginBottom: "1rem" }}
    className="notification is-warning is-size-5"
  >
    {props.message}
  </div>
);

export default ErrorMessage;
