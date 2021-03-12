import React from "react";
import home1 from "../img/home1.png";
import { Description, Layout, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amaizing skills.
          </p>
          <button>Contact Us</button>
        </motion.div>
      </Description>
      <Image>
        <img src={home1} alt="guy with the camera" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
