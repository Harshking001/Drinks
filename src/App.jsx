import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
