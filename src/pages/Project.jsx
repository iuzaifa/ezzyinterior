import React from 'react'
import BreadcrumbHeader from '../components/sections/BreadcrumbHeader'
import Gallery from '../components/sections/Gallery'
import Testimonials from '../components/sections/Testimonials'
import WorkGallary from '../components/sections/WorkGallary'
import CTA from '../components/sections/CTA'
import OurWork from '../components/sections/OurWork'

const Project = () => {
  return (
    <>
      <BreadcrumbHeader title='Projects'/>
      <OurWork/>
      <Gallery/>
      <Testimonials/>
      <WorkGallary/>
      <CTA/>
    </>
  )
}

export default Project