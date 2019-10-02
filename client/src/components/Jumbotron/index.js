import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 40, width: "100%", clear: "both", marginTop: 10, marginRight: 5, marginLeft: 5, paddingTop: 10, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
