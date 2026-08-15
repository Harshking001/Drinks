import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Drinks from './components/Drinks';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Drinks />
    </main>
  )
}

export default App
