import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ background: "none" , width:"100%", clear: "both", paddingTop:20, paddingBottom: 20, marginTop:20, marginRight:5, marginLeft:5, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
