import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import TeamSection from '../components/sections/TeamSection'
import Testimonials from '../components/sections/Testimonials'
import Services from '../components/sections/Services'
import Gallery from '../components/sections/Gallery'
import CTA from '../components/sections/CTA'
import ContactForm from '../components/sections/ContactForm'
import OurWork from '../components/sections/OurWork'

const Home = () => {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <Services />
        <OurWork/>
        <Gallery/>
        <TeamSection/>
        <Testimonials/>
        <CTA/>
        <ContactForm/>
    </>
  )
}

export default Home