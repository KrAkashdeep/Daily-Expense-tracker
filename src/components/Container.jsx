/* eslint-disable react/prop-types */
// import React from "react";

function Container({ children }) {
  return (
    <div className="container-box">
      <div>{children}</div>
    </div>
  );
}

export default Container;
