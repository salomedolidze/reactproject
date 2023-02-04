import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import abouttravel from "../assets/image/abouttravel.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
const About = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={abouttravel}
        title="About"
        url="/about"
        btnClass="hide"
      />

      <AboutUs />

      <Footer />
    </>
  );
};

export default About;
