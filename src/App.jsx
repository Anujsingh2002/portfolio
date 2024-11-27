import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}

export default App