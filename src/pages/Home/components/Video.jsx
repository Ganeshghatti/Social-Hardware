import React from "react";
import TitleComponent from "../../../components/TitleComponent";
import Videomp4 from "../../../../public/assets/video/video.mp4";

export default function Video() {
  return (
    <section id="video" className="relative py-4 md:py-8 flex w-full">
      <TitleComponent
        title="Tech Demo"
        styles={"absolute left-[4vw] top-[2vh]"}
      />

      <div className="video-container w-full flex justify-center items-center pt-16 md:pt-24 z-10 m-auto">
        <video
          controls
          className="rounded-lg shadow-lg video-mp4 w-11/12 md:w-[65%]"
        >
          <source src={Videomp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="line-v-1" />
      <div className="line-v-3" />
    </section>
  );
}
