import React from "react";
import Hero from "../components/Hero";
import contact from "../assets/image/contact.png";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={contact}
        title="Contact"
        url="/contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
