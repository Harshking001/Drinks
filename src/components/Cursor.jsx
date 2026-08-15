import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react'

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    window.addEventListener("mousemove",(e)=>{
        setPosition({x: e.clientX, y: e.clientY});
    })

    useGSAP(() => {
        gsap.to('#cursor',{
            x: position.x,
            y: position.y,
            left: -30,
            top: -30,
        })

    },[position])

  return (
    <div id="cursor" className='cursor'>
      <div id="in" className='cursor'></div>
    </div>
  )
}

export default Cursor
