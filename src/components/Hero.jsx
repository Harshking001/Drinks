import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(SplitText);
import { ScrollTrigger } from 'gsap/all';
const Hero = () => {

    useGSAP(() => {
        let mm = gsap.matchMedia();

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
       mm.add("(min-width: 591px)",()=>{
            tl.to('.drink-img',{
                scale: 0.4,
                yPercent: 85,
                rotate: -360,
                // zIndex: 2,
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'bottom center', 
                    // pin: true,
                    scrub: 1,
                    pinSpacing: false,
                }
            })
       }) 

    mm.add("(max-width: 590px)",()=>{
            gsap.to('.drink-img',{
                scale: 0.8,
                yPercent: 160,
                rotate: -360,
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'bottom center', 
                    scrub: 1,
                    // pinSpacing: false,
                }
            })
       }) 

       gsap.from(".fresh",{
        scale: 5,
        duration: 1,
        zIndex: 1,
       })
       
    })
  return (
    <section id="hero">
      <div id="hero-container">
        <img className='fresh' src="/Drinks/images/fav.png" alt="fresh" />
        <img src="/Drinks/images/footer-right-leaf.png" alt="leaf-top" className='leaf-top'/>
        <img src="/Drinks/images/hero-right-leaf.png" alt="leaf-right" className='leaf-right lvs'/>
        <img src="/Drinks/images/hero-left-leaf.png" alt="leaf" className='leaf lvs'/>
        <img src="/Drinks/images/drink1.png" className="drink-img" alt="drink"/>
      </div>
    </section>
  )
}

export default Hero
