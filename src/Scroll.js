import { useState } from "react";

import React from 'react'

const Scroll = () => {
    const [isScroll, setScroll] = useState(false)

    const handleScroll = (e) => {
        const hero = document.getElementById('hero')
        const offset = e.target.scrollTop;
        
        if (hero.clientHeight -80 < offset) {
          setScroll(true);
        } else {
            setScroll(false);
        }
    }
  return ({
    handleScroll,
    isScroll
  })
   
}

export default Scroll
