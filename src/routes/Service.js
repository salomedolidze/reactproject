import React from "react";
import travelservice from "../assets/image/service.jpg";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
const Service = () => {
  return (
    <>
      {" "}
      <Hero
        cName="hero-mid"
        heroImg={travelservice}
        title="Service"
        url="/service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
