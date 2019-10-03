import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "auto", width:"100%", clear: "both", marginTop:20, marginRight:5, marginLeft:5, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
