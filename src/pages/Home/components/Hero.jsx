import React from "react";
import heroimg from "../../../../public/assets/images/heroImage.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex w-full flex-col-reverse md:flex-row-reverse relative pt-8 md:py-0 gap-6 md:gap-0"
    >
      <div className="w-[95%] md:w-[55%] z-10">
        <img src={heroimg} alt="hero" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full text-center md:text-left md:w-[42%] relative md:absolute md:left-[4%] md:transform md:translate-y-[45%] content flex flex-col gap-6 z-10">
        <h1 className="text-white title">
          Pioneering Safety
          <br />
          and Efficiency with <br />
          <span className="text-orange"> Next-Generation</span>
          <br /> Telerobotic Solutions
        </h1>
        <p className="desc hidden md:block">
          Eclipse Remote Systems are designed for extreme environments,
          utilizing advanced telerobotics to guarantee maximum safety and
          efficiency. Empower your high-risk operations with our superior
          capabilities.
        </p>
      </div>
      <p className="ph-desc md:hidden absolute bottom-[4%] left-0 w-[90%] z-10 pl-[4%]">
        Eclipse Remote Systems are designed for extreme environments, utilizing
        advanced telerobotics to guarantee maximum safety and efficiency.
        Empower your high-risk operations with our superior capabilities.
      </p>
      <div className="line-v-1" />
      <div className="line-v-2" />
      <div className="line-v-3" />
      <div className="line-h-1" />
    </section>
  );
}
