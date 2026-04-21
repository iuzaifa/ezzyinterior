import React from 'react'
import BreadcrumbHeader from '../components/sections/BreadcrumbHeader'
import AboutSection from '../components/sections/AboutSection'
import OurTeam from './OurTeam'
import TeamSection from '../components/sections/TeamSection'
import CTA from '../components/sections/CTA'
import Gallery from '../components/sections/Gallery'
import ContactInfo from '../components/sections/ContactInfo'
const About = () => {
  return (
    <>
      <BreadcrumbHeader title="About" />
      <AboutSection/>
      <TeamSection/>
      <Gallery/>
      <CTA/>
      <ContactInfo/>
    </>
  )
}

export default About