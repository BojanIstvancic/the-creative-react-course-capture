import React from "react";
import home1 from "../img/home1.png";
import { Description, Layout, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amaizing skills.
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="guy with the camera" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
