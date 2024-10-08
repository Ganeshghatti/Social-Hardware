import React from "react";
import heroimg from "../../../../public/assets/images/heroImage.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex w-full flex-col-reverse md:flex-row-reverse relative pt-8 md:py-0 gap-6 md:gap-0"
    >
      <div className="w-[95%] md:w-[53%] z-10">
        <img src={heroimg} alt="hero" className="w-full h-auto object-cover  md:pt-28" />
      </div>
      <div className="w-full text-center md:text-left md:w-[42%] relative md:absolute md:left-[4%] md:transform md:translate-y-[50%] content flex flex-col gap-6 z-10 pt-24">
        <h1 className="text-white title">
          Pioneering Safety &nbsp;
          <br className="hidden md:block" />
          and Efficiency with <br className="hidden md:block" />
          <span className="text-orange"> Next-Generation</span>
          <br className="hidden md:block" /> Telerobotic Solutions
        </h1>
        <p className="desc hidden md:block">
          Our cutting-edge teleoperated robots allow you to manage hazardous
          operations remotely, keeping your workforce safe. With real-time data
          insights and advanced situational awareness, you maintain precise
          control in even the toughest conditions. Eclipse Remote Systems give
          you the tools to complete high-risk tasks securely and efficiently,
          reducing downtime and maximizing safety. Operate smarter, minimize
          risk, and achieve more with Eclipse Remote Systems.
        </p>
      </div>
      <p className="ph-desc md:hidden absolute bottom-[2%] left-0 w-[95%] z-10 pl-[4%]">
        Our cutting-edge teleoperated robots allow you to manage hazardous
        operations remotely, keeping your workforce safe. With real-time data
        insights and advanced situational awareness, you maintain precise
        control in even the toughest conditions. Eclipse Remote Systems give you
        the tools to complete high-risk tasks securely and efficiently, reducing
        downtime and maximizing safety. Operate smarter, minimize risk, and
        achieve more with Eclipse Remote Systems.
      </p>
      <div className="line-v-1" />
      <div className="line-v-2" />
      <div className="line-v-3" />
      <div className="line-h-1" />
    </section>
  );
}
