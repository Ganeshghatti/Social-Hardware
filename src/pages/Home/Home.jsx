import React from "react";
import Hero from "./components/Hero";
import "./Home.scss";
import BlockComponent from "./components/BlockComponent";
import Features from "./components/Features";
import Partnerships from "./components/Partnerships";
import FAQs from "./components/FAQs";
import SectionIndicator from "../../components/SectionIndicator";
import Functionalities from "./components/Functionalities";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BlockComponent />
      <Partnerships />
      <BlockComponent />
      <Features /> 
      <BlockComponent />
      <Functionalities />
      <BlockComponent />
      <FAQs />
      <BlockComponent />
      <Contact />
      <SectionIndicator />
    </>
  );
}
