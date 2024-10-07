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
import Technology from "./components/Technology";
import Video from "./components/Video";
import WhatsappCTA from "./components/WhatsappCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BlockComponent />
      <Video />
      <Technology />
      <BlockComponent />
      <Features />
      <BlockComponent />
      <Functionalities />
      <BlockComponent />
      <FAQs />
      <BlockComponent />
      <Partnerships />
      <BlockComponent />
      <Contact /> 
      <BlockComponent />
      <WhatsappCTA />
      <SectionIndicator />
    </>
  );
}
