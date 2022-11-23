import React, { Children } from "react";
import Navbar from "../components/Navbar";

function mainLayout({Children}) {
  return (
    <div>
      <Navbar></Navbar>
      <div>{Children}</div>
    </div>
  );
}

export default mainLayout;
