import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      {/* if we don't want a div we can create fraction <></> - it is mimicking divs */}
    </>
  );
};

export default AboutUs;
