import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
