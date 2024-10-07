import React, { useState } from "react";
import TitleComponent from "../../../components/TitleComponent";

const faqData = [
  {
    question: "How Prosthetics work?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos fugiat pariatur provident error saepe laboriosam, sit magnam quo est.",
  },
  {
    question: "What are the benefits of telerobotic solutions?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos fugiat pariatur provident error saepe laboriosam, sit magnam quo est.",
  },
  {
    question: "How does your technology ensure safety?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos fugiat pariatur provident error saepe laboriosam, sit magnam quo est.",
  },
  {
    question: "How does your technology ensure safety?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos fugiat pariatur provident error saepe laboriosam, sit magnam quo est.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative flex">
      <div className="left-container">
        <TitleComponent
          title="F.A.Q's"
          styles={"absolute left-[4vw] top-[2vh]"}
        />
      </div>
      <div className="center-container">
        <div className="flex items-center justify-center">
          <div className="w-1/2 pr-8 border-r border-[#353539]" />
          <div className="w-1/2 text-xs md:text-xl font-medium font-['VioletSans'] text-[#A5A5A5] center-container-right-block px-1 md:px-6 py-6 md:py-14 text-right justify-end">
            Can't find an answer to your question?
            <br />
            Feel free to &nbsp;
            <br className="md:hidden"/>
            <span
              className="cursor-pointer underline"
              onClick={scrollToContact}
            >
              contact us.
            </span>
          </div>
        </div>
        {faqData.map((faq, index) => (
          <div key={index} className="QnA-block">
            <p
              className="question flex items-center justify-between"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className={`transform transition-transform duration-250 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                <path
                  d="M27.3281 14.2188C27.3281 14.5171 27.2096 14.8033 26.9986 15.0142C26.7876 15.2252 26.5015 15.3438 26.2031 15.3438H14.9531V26.5938C14.9531 26.8921 14.8346 27.1783 14.6236 27.3892C14.4126 27.6002 14.1265 27.7188 13.8281 27.7188C13.5298 27.7188 13.2436 27.6002 13.0326 27.3892C12.8217 27.1783 12.7031 26.8921 12.7031 26.5938V15.3438H1.45312C1.15476 15.3438 0.868609 15.2252 0.65763 15.0142C0.446652 14.8033 0.328125 14.5171 0.328125 14.2188C0.328125 13.9204 0.446652 13.6342 0.65763 13.4233C0.868609 13.2123 1.15476 13.0938 1.45312 13.0938H12.7031V1.84375C12.7031 1.54538 12.8217 1.25923 13.0326 1.04826C13.2436 0.837277 13.5298 0.71875 13.8281 0.71875C14.1265 0.71875 14.4126 0.837277 14.6236 1.04826C14.8346 1.25923 14.9531 1.54538 14.9531 1.84375V13.0938H26.2031C26.5015 13.0938 26.7876 13.2123 26.9986 13.4233C27.2096 13.6342 27.3281 13.9204 27.3281 14.2188Z"
                  fill="#6A6A6A"
                />
              </svg>
            </p>
            <div
              className={`answer overflow-hidden transition-all duration-250 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 pt-4 md:pt-10 px-2 md:px-4"
                  : "max-h-0 opacity-0 pt-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="right-container" />
      <div className="line-v-1" />
      <div className="line-v-3" />
    </section>
  );
}
