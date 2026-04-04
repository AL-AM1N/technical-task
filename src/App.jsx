import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Ticker from './components/Ticker'
import Portfolio from './components/Portfolio'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Clients from './components/Clients'
import Impact from './components/Impact'
import Reel from './components/Reel'
import AwardsSection from './components/AwardsSection'
import FAQSection from './components/FAQSection'
import BlogGrid from './components/BlogGrid'
import Footer from './components/Footer'
import SmoothFollower from './components/SmoothFollower'

function App() {

  return (
    <>
    <SmoothFollower></SmoothFollower>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Ticker></Ticker>
        <Portfolio></Portfolio>
        <Expertise></Expertise>
        <Clients></Clients>
        <Reel></Reel>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Impact></Impact>
        <AwardsSection></AwardsSection>
        <Team></Team>
        <FAQSection></FAQSection>
        <BlogGrid></BlogGrid>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
