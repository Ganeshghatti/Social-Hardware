import React from "react";
import TitleComponent from "../../../components/TitleComponent";
import ButtonComponentv2 from "../../../components/ButtonComponentv2";

export default function Partnerships() {
  return (
    <section id="partnerships" className="relative flex">
      <div className="left-container">
        <TitleComponent
          title="Collaborate"
          styles={"absolute left-[4vw] top-[2vh]"}
        />
      </div>
      <div className="center-container">
        <h2 className="flex items-center justify-center title">
          Why Partner With Us?
        </h2>
        <table>
          <tr>
            <td className="table-title">Workplace Safety</td>
            <td className="table-content">
              Safe workers are more productive, with fewer disruptions caused by
              injuries or accidents, lower insurance costs, and improved
              employee morale, all of which contribute to a more successful
              operation.
            </td>
          </tr>
          <tr>
            <td className="table-title">Operational Efficiency</td>
            <td className="table-content">
              Our systems enhance efficiency by allowing operators to control
              tasks remotely with real-time precision, reducing the risk of
              errors and accelerating workflows. This advanced control leads to
              quicker task completion, optimized resource use, and smoother
              operations
            </td>
          </tr>
          <tr>
            <td className="table-title">Regulatory Complaince</td>
            <td className="table-content">
              The real-time video feeds, AI-powered hazard identification, and
              sensor data enable operators to conduct remote inspections,
              swiftly identifying risks or compliance issues to prevent
              accidents and violations. The system's data recording and storage
              capabilities provide accurate documentation for audits, safety
              reports, and regulatory inspections, ensuring continuous
              compliance with industry standards.
            </td>
          </tr>
        </table>
        <div className="cta flex flex-col gap-4">
          <p className="cta-text">
            Join us in pioneering the next generation of robotics that solve
            real-world problems and save lives. Together, we can drive
            meaningful impact across industries.
          </p>
          <ButtonComponentv2 text="Join Now" link="contact" styles="w-fit" />
        </div>
      </div>
      <div className="right-container">drg</div>
      <div className="line-v-1" />
      <div className="line-v-3" />
    </section>
  );
}
