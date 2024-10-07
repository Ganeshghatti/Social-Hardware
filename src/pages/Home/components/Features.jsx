import React from "react";
import TitleComponent from "../../../components/TitleComponent";
import feature1 from "../../../../public/assets/images/feature1.png";
import feature2 from "../../../../public/assets/images/feature2.png";
import feature3 from "../../../../public/assets/images/feature3.png";

export default function Features() {
  const cardData = [
    {
      index: "01",
      title: "Augmented Reality Control",
      description:
        "Operators use an AR interface for immersive, real-time control, enhancing situational awareness and precision.",
      params: ["5MS LATENCY", "REAL-TIME DATA OVERLAY"],
      image: feature1,
    },
    {
      index: "02",
      title: "Modular Hot-Swappable Tool Attachments",
      description:
        "Eclipse's modular tool system allows quick adaptation to diverse industrial tasks, from handling hazardous materials to complex operations, offering versatile solutions.",
      params: [" DUAL 10-DOF ARMS", "NO REBOOT NEEDED"],
      image: feature2,
    },
    {
      index: "03",
      title: "Mesh Network Communication",
      description:
        "Advanced mesh networking technology allows operators to control the system without direct line of sight. This ensures reliable communication in confined or obstructed environments.",
      params: ["UP TO 1.5 KM RANGE", "ROBUST  DATA TRANSMISSION"],
      image: feature3,
    },
  ];
  return (
    <section id="features" className="relative flex">
      <TitleComponent
        title="Features"
        styles={"absolute left-[4vw] h-fit top-[2vh]"}
      />
      <div className="cards-parent-container flex flex-col w-full mt-32">
        {cardData.map((card, index) => (
          <div className="cards-container">
            <div
              className="card z-10 flex justify-end items-center"
              key={index}
            >
              <div className="card-left w-1/4 flex flex-col gap-4 absolute left-0">
                <p className="index w-fit">{card.index}</p>
                <p className="title">{card.title}</p>
                <p className="description">{card.description}</p>
              </div>
              <div className="card-right flex relative justify-center">
                <img src={card.image} alt={card.title} className="w-1/2 z-10" />
                <div className="params-container absolute right-0 top-1/2 -translate-y-1/2 flex flex-col h-full justify-center w-1/2">
                  {card.params.map((param, index) => (
                    <p key={index} className="param">
                      {param}
                    </p>
                  ))}
                </div>
                <div className="flex gap-4 right-0 get-a-trial absolute justify-end bottom-0  w-1/2">
                  GET A TRIAL
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <path
                      d="M17.1212 14.7816C16.9898 14.7816 16.8596 14.7558 16.7382 14.7055C16.6168 14.6553 16.5065 14.5816 16.4136 14.4887C16.3206 14.3958 16.247 14.2854 16.1967 14.164C16.1464 14.0426 16.1206 13.9125 16.1207 13.7811L16.1216 3.46772L2.27294 17.3164C2.08541 17.5039 1.83108 17.6092 1.56588 17.6092C1.30068 17.6092 1.04634 17.5039 0.858819 17.3164C0.671295 17.1288 0.565945 16.8745 0.565945 16.6093C0.565945 16.3441 0.671295 16.0898 0.858819 15.9022L14.7075 2.0536L4.39411 2.05448C4.12877 2.05448 3.87429 1.94907 3.68666 1.76145C3.49903 1.57382 3.39363 1.31934 3.39363 1.05399C3.39363 0.788647 3.49903 0.534169 3.68666 0.34654C3.87429 0.158912 4.12877 0.0535036 4.39412 0.0535036L17.1212 0.0535031C17.2526 0.05343 17.3827 0.079259 17.5041 0.129512C17.6256 0.179766 17.7359 0.253458 17.8288 0.346377C17.9217 0.439295 17.9954 0.549617 18.0457 0.671035C18.0959 0.792453 18.1217 0.922586 18.1217 1.05399L18.1217 13.7811C18.1217 13.9125 18.0959 14.0426 18.0457 14.164C17.9954 14.2854 17.9217 14.3958 17.8288 14.4887C17.7359 14.5816 17.6256 14.6553 17.5041 14.7055C17.3827 14.7558 17.2526 14.7816 17.1212 14.7816Z"
                      fill="#FD8600"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="line-v-1" />
      <div className="line-v-2" />
      <div className="line-v-3" />
    </section>
  );
}
