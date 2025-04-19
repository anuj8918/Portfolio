import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection'
import Education from './components/Education'

const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Education/> */}
      {/* <Services/> */}
      <SkillSection />
      <ProjectSection/>
      {/* <Work/> */}
      <Contact/>
    </div>
  )
}

export default App
