import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import OurTeam from "../pages/OurTeam";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="ourteam" element={<OurTeam />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;