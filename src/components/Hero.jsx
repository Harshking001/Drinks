import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(SplitText);
import { ScrollTrigger } from 'gsap/all';
const Hero = () => {

    useGSAP(() => {
        let split = SplitText.create('.heroText',{
            type: 'chars'
        })
        gsap.from(split.chars,{
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
        })
        let tl = gsap.timeline()

        gsap.to('.lvs', {
            xPercent: gsap.utils.wrap([50, -50]),
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top', 
                pin: true,
                scrub: 1,
            }
        })
        tl.to('.drink',{
            scale: 0.4,
            yPercent: 100,
            scrollTrigger: {
                trigger: '#hero',
                start: 'bottom center', 
                // pin: true,
                scrub: 1,
                pinSpacing: false,
            }
        })
    })
  return (
    <section id="hero">
      <div id="hero-container">
        <img src="/images/footer-right-leaf.png" alt="leaf-top" className='leaf-top'/>
        <img src="/images/hero-right-leaf.png" alt="leaf-right" className='leaf-right lvs'/>
        <img src="/images/hero-left-leaf.png" alt="leaf" className='leaf lvs'/>
        <img src="/images/drink1.png" className="drink" alt="drink"/>
        <h1 className="heroText">Fresh</h1>
      </div>
    </section>
  )
}

export default Hero
