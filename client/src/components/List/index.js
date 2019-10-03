import React from "react";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container"
    style={{background: "none"}}
    >
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li
    style={{background: "papayawha", borderLeft: "none", borderRight: "none", marginLeft: 20, marginBottom: 5, display: "inline-block" }}
    className="list-group-item">{children}</li>;
}
