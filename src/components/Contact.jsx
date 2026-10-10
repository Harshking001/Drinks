import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Contact = () => {

  useGSAP(()=>{
    gsap.from(".contact",{
      height: 0,
      overflow: 'hidden',
      borderStyle:'none',
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#contact",
        start: 'bottom bottom'
      }
    })
  },[])
  return (
    <section id="contact">
      <h1>Lets Connect</h1>
      <img id="contact-img"src="/Drinks/images/footer-drinks.png" alt="image" />
      <div className="contact">
          <div id="input"><input type="text" placeholder='Your Name'/></div>
          <div id="input"><textarea name="massage" placeholder='Write Massage...'></textarea></div>
          <div id="button">Sent Massage</div>
      </div>
    </section>
  )
}

export default Contact
