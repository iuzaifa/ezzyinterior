import React from "react";
import BreadcrumbHeader from "../components/sections/BreadcrumbHeader";
import Testimonials from "../components/sections/Testimonials";
import AutoGallery from "../components/sections/AutoGallery";

import CTA from "../components/sections/CTA";
import OurWork from "../components/sections/OurWork";

const Project = () => {
  return (
    <>
      <BreadcrumbHeader title="Projects" />
      <OurWork />
      <Testimonials />
      <AutoGallery />
      <CTA />
    </>
  );
};

export default Project;
