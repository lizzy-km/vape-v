import React from "react";

const ReleasedCard = ({ product }) => {
  const bgColor = product.bgClass;
  return (
    <div className="  relative  flex-wrap flex rounded-lg max-[500px]:w-[280px] w-[280px]  h-[200px] ">
      <div
        style={{
          backgroundImage: `url(${product.background}) `,
          backgroundColor: bgColor,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          backgroundPosition: "right bottom",
        }}
        className=" rounded-l-lg flex  relative w-full h-full   "
      >
        <img
          className=" cursor-pointer absolute h-[100%] top-0 right-0  z-[9] flex rounded-l-xl object-cover "
          src={product.url}
        />
        <div
          className="  text-[1rem] rounded-l-lg flex justify-end items-end  font-medium absolute h-[100%] p-0 bottom-0 left-0 w-[50%] text-white  "
          direction={"column"}
        >
          <div className="flex w-full flex-col p-2 justify-end backdrop-blur h-full rounded-l-lg px-2 ">
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
