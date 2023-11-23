import React from "react";
import Comman from "./Comman";
import web from "../src/images/img1.jpg";  // Make sure to import the correct image path

const About = () => {
  return (
    <>
      <Comman
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
