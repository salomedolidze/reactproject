import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import travelhero from "../assets/image/travelhero.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={travelhero}
        title="Your Journay Your Story"
        text="Choose Your Favourite Destination "
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
