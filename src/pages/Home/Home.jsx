import React from "react";
import Hero from "./components/Hero";
import "./Home.scss";
import BlockComponent from "./components/BlockComponent";
import Features from "./components/Features";
import Partnerships from "./components/Partnerships";

export default function Home() {
  return (
    <>
      <Hero />
      <BlockComponent />
      <Features />
      <BlockComponent />
      <Partnerships />
      <BlockComponent />
    </>
  );
}
