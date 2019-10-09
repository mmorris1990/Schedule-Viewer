import React from "react";
import "./nav.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* <a className="navbar-brand" href="">
        | FBSSSS |
      </a> */}
      <a className="navbar-brand" href="/schedule">
        | Home |
      </a>

      <a className="navbar-brand" href="/tasks">
        | Edit Tasks |
      </a>
    </nav>
  );
}

export default Nav;
