import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {
  useGSAP(()=>{
    gsap.fromTo('.about-img',{
      xPercent: 160,
    },
  {
    xPercent: -160,
    stagger: 0.5,
    rotate: gsap.utils.wrap([20, -30, 10, -15,25]),
    x: gsap.utils.wrap([10,-15,0,15,5]),
    duration: 2,
    ease: 'linear',
    
    scrollTrigger: {
      trigger: '#about',
      scrub: true,  
      pin:"#about",
    }
  })
  })
  return (
    <section id="about">
      <h1>About</h1>
      <div className='about'>
        <div className='about-img'><img src="/Drinks/images/abt1.png" alt="about" /></div>
        <div className='about-img'><img src="/Drinks/images/abt2.png" alt="about" /></div>
        <div className='about-img'><img src="/Drinks/images/abt3.png" alt="about" /></div>
        <div className='about-img'><img src="/Drinks/images/abt4.png" alt="about" /></div>
        <div className='about-img'><img src="/Drinks/images/abt5.png" alt="about" /></div>
      </div>
    </section>
  )
}

export default About
