import React from "react";
import heroimg from "../../../../public/assets/images/heroImage.png";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-row-reverse relative">
      <div className="w-[55vw] z-10">
        <img src={heroimg} alt="hero" className="w-full h-auto object-cover" />
      </div>
      <div className="w-[42vw] absolute left-[4vw] transform translate-y-[45%] content flex flex-col gap-6 z-10">
        <h1 className="text-white title">
          Pioneering Safety
          <br />
          and Efficiency with <br />
          <span className="text-orange"> Next-Generation</span>
          <br /> Telerobotic Solutions
        </h1>
        <p className="desc">
          Eclipse Remote Systems are designed for extreme environments,
          utilizing advanced telerobotics to guarantee maximum safety and
          efficiency. Empower your high-risk operations with our superior
          capabilities.
        </p>
      </div>
      <div className="line-v-1" />
      <div className="line-v-2" />
      <div className="line-v-3" />
      <div className="line-h-1" />
    </section>
  );
}
