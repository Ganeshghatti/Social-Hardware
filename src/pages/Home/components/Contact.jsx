import React, { useState } from "react";
import validator from "validator";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!validator.isEmail(formData.email)) tempErrors.email = "Invalid email";
    if (!validator.isMobilePhone(formData.phone))
      tempErrors.phone = "Invalid phone number";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await emailjs.send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          formData,
          "YOUR_USER_ID"
        );
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <section id="contact" className="relative flex py-8">
      <div className="left-container" />
      <div className="center-container px-0 md:px-6 flex flex-col gap-6 md:gap-12 items-center">
        <h2 className="title">CONTACT US</h2>
        <form
          className="flex flex-col gap-6 md:gap-12 w-full"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-transparent border-b border-[#353539] text-white placeholder-[#A7A7A7] pb-3 md:pb-5 focus:outline-none w-full text-[11px] md:text-base"
            />
            {errors.name && (
              <p className="text-red-500 text-[11px] md:text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-transparent border-b border-[#353539] text-white placeholder-[#A7A7A7] pb-3 md:pb-5 focus:outline-none w-full text-[11px] md:text-base"
            />
            {errors.email && (
              <p className="text-red-500 text-[11px] md:text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="bg-transparent border-b border-[#353539] text-white placeholder-[#A7A7A7] pb-3 md:pb-5 focus:outline-none w-full text-[11px] md:text-base"
            />
            {errors.phone && (
              <p className="text-red-500 text-[11px] md:text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="bg-transparent border-b border-[#353539] text-white placeholder-[#A7A7A7] pb-3 md:pb-5 focus:outline-none resize-none w-full text-[11px] md:text-base"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-[11px] md:text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="relative transition-colors duration-300 w-fit self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="114"
              height="39"
              viewBox="0 0 114 39"
              fill="none"
            >
              <path
                d="M109.458 1.25391H4.97331C3.07663 1.25391 1.53906 2.79147 1.53906 4.68815V25.8606C1.53906 27.0838 2.18967 28.2147 3.24713 28.8295L18.4733 37.6824C18.9975 37.9871 19.5931 38.1477 20.1995 38.1477H99.0199C100.482 38.1477 101.784 37.2221 102.264 35.8412L112.702 5.81587C113.478 3.58424 111.821 1.25391 109.458 1.25391Z"
                fill="black"
                stroke="#E7A349"
                strokeWidth="1.41406"
              />
            </svg>
            <p
              className="flex items-center justify-center text-sm font-medium text-white absolute inset-0"
              style={{ transform: "translate(-1px, -1px)" }}
            >
              Submit
            </p>
          </button>
        </form>
      </div>
      <div className="right-container" />
      <div className="line-v-1" />
      <div className="line-v-3" />
    </section>
  );
}
