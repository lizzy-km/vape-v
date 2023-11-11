import { useState } from "react";

import React from 'react'

const Scroll = () => {
    const [isScroll, setScroll] = useState(false)

    const handleScroll = (e) => {
        const offset = e.target.scrollTop;
        if (400 < offset) {
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
