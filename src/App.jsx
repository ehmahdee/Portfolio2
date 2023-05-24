import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Resume from './components/resume/Resume.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Resume/>
      <Testimonials />
      <Contact />
      <Footer />
    </>

  )
}

export default App