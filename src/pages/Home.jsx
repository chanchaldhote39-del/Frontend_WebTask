import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Features from '../Components/Features/Features'
import CardBox from '../Components/Cards/CardBox'
import Footer from '../Components/Footer/Footer'
import Blog from '../Components/Blog/Blog'
import TestimonialsSection from '../Components/Testimonials/Testimonials'
import Courses from '../Components/Courses/Courses'
import Employee from '../Components/Employee/Employee'



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardBox />
      <Courses />
      <Features />
      <Employee />
      <TestimonialsSection />
      <Blog />
      <Footer />

    </>
  )
}

export default Home