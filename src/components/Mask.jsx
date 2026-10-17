import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Mask = () => {

    useGSAP(()=>{
        gsap.to('#mask',{
            maskSize: 4000,
            scrollTrigger: {
                trigger: '#mask',
                pin: true,
                scrub: true,
            }
        })
    },[])
  return (
    <section id="mask">
      <img src="/images/under-img.jpg" alt="image" />
    </section>
  )
}

export default Mask
