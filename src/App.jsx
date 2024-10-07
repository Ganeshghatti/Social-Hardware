import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
    </>
  );
}
