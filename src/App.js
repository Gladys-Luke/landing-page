import logo from "./logo.svg";
import "./App.css";
// import React from "react";
import { useState } from "react";
import MainLayout from "./layout/mainLayout";
import Home from "./pages/Home";



function App() {
  return (
    <MainLayout>
      <div className="App">
      <Home />

      </div>
    </MainLayout>
  );
}

export default App;
