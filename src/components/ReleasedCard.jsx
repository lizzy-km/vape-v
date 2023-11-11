import React from "react";
import { Stack, Typography, Grid, Button, Box } from "@mui/material";

const ReleasedCard = ({ product }) => {
  const bgColor = product.bgClass;
  return (
    <div className="  relative  flex rounded-lg max-[500px]:w-[100%] w-[25%]  h-[200px] ">
      <div
        style={{
          backgroundImage: `url(${product.background}) `,
          backgroundColor: bgColor,
          backgroundSize: "200px",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          backgroundPosition: "right bottom",
        }}
        className=" rounded-lg flex  relative w-full h-full   "
      >
        <img
          className=" cursor-pointer absolute h-[100%] top-0 right-0  z-[9] flex rounded-xl object-cover "
          src={product.url}
        />
        <div
          className="  text-[1rem] rounded-lg flex justify-end items-end  font-medium absolute h-[100%] p-2 bottom-0 left-0 w-[50%] text-white  "
          direction={"column"}
        >
          <div className="flex w-full flex-col justify-end backdrop-blur h-full rounded-lg px-2 ">
            <p>{product.name}</p>
            <p>Nic {product.percent} Percent</p>
            <p className=" text-sm py-1 font-thin">
              {product.originalPrice} MMK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleasedCard;
