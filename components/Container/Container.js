import React from "react";
import Navbar from "../Navbar/Navbar.js";

export default function Container(props) {
  return (
    <div className="grid">
      <Navbar />
      {props.children}
    </div>
  );
}
