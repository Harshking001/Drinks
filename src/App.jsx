import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Drinks from './components/Drinks';
import Cursor from './components/Cursor';
import About from './components/About';
import Contact from './components/Contact';
import Mask from './components/Mask';

const App = () => {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Drinks />
      <About />  
      <Mask />
      <Contact />
    </main>
  )
}

export default App
