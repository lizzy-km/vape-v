import React, { useEffect, useState } from 'react'
import {Typography } from "@mui/material";

const Card = ({product,slide}) => {


    useEffect(()=> {
      const card = document.getElementById('card')
  
      card?.classList.add(`translate-x-[${-23 * slide}%]`)
      card?.classList.remove(`translate-x-[${(-23 * slide)+23}%]`)
  
    },[slide])
  
   
  return (
    <div    className=" transition-all flex justify-center items-center flex-col min-w-[23%]">
                    
    <img
      src={product.url}
      className=" cursor-pointer w-[100%] rounded-lg "
    />
    <Typography sx={{ color: "white", fontSize: "14px",  }}>
      {product.name}
    </Typography>
    {product.promotePrice > 0 ? (
      <>
        <Typography sx={{ color: "white" }}>
          {product.promotePrice} Ks
        </Typography>
        <Typography
          sx={{
            color: "gold",
            textDecoration: "line-through",
            fontSize: "14px",
          }}
        >
          {product.originalPrice} Ks
        </Typography>
      </>
    ) : (
      <Typography sx={{ color: "gold", fontSize: "14px" }}>
        {product.originalPrice} MMK
      </Typography>
    )}

    <div className=" flex justify-center items-center ">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-x9fn3p"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="StarIcon"
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </svg>
      <p className=" tracking-wider font-sans font-medium text-yellow-400 text-[12px] ">
        {" "}
        600 Points{" "}
      </p>
    </div>

</div>
  )
}

export default Card
