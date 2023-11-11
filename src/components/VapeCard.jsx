import React from 'react'

const VapeCard = ({product,i}) => {
  return (
    <div   className=" font-sans rounded-lg  flex relative justify-center items-center max-[500px]:w-[80%] w-full ">
                        <div className=" cursor-pointer flex flex-col justify-center items-center  "
                        >
                            <img className=" cursor-pointer transition-all bg-[#d4d4d4] rounded-xl w-[90%] object-cover " src={product.url} alt={`img${i}`} id="gridImg"/>
                            <p  className="font-sans font-medium tracking-wide ">{product.name}</p>
                            <p className="font-sans font-semibold tetx-[1rem] " >{product.promotePrice} MMK</p>
                            <p className="font-sans line-through text-[12px] " >{product.originalPrice} MMK</p>
                            <div className=" flex justify-center items-center " >
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-x9fn3p" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            <p className=" tracking-wider font-sans font-medium text-yellow-400 text-[13px] ">  {product.points} Points </p>

                            </div>
                        </div>
                        <p className=" text-white font-sans text-[12px] px-3 absolute top-0 bg-[#ff0000] " id="percentOff">{product.promotePercent}% OFF</p>
                           </div>
  )
}

export default VapeCard
