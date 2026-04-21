import React from "react";
import ContactForm from "../components/sections/ContactForm";
import BreadcrumbHeader from "../components/sections/BreadcrumbHeader";
import CTA from "../components/sections/CTA";
import ContactInfo from "../components/sections/ContactInfo";

const Contact = () => {
  return (
    <>
      <BreadcrumbHeader title="Contact" />
      <ContactInfo/>
      <ContactForm />
      <CTA/>
    </>
  );
};

export default Contact;
